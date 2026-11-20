-- =============================================================
-- DataTalk AI: Complete Database Schema
-- Safe to run multiple times. Drops existing policies first.
-- =============================================================

-- ---- Extensions ----
create extension if not exists "uuid-ossp";

-- ---- Drop existing policies so this script is re-runnable ----
do $$ declare
  r record;
begin
  for r in (
    select policyname, tablename
    from pg_policies
    where schemaname = 'public'
  ) loop
    execute format('drop policy if exists %I on public.%I', r.policyname, r.tablename);
  end loop;
end $$;

-- ============================================================
-- PROFILES
-- One row per authenticated user (auto-created on signup).
-- ============================================================
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  full_name     text,
  avatar_url    text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- Auto-create profile on new user signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- WORKSPACES
-- ============================================================
create table if not exists public.workspaces (
  id            uuid primary key default uuid_generate_v4(),
  name          text not null,
  owner_id      uuid not null references auth.users(id) on delete cascade,
  plan          text not null default 'trial',  -- trial | starter | professional | business
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table public.workspaces enable row level security;

create policy "Workspace members can view workspace"
  on public.workspaces for select
  using (
    owner_id = auth.uid() or
    exists (
      select 1 from public.workspace_members
      where workspace_id = workspaces.id and user_id = auth.uid()
    )
  );

create policy "Owner can update workspace"
  on public.workspaces for update using (owner_id = auth.uid());

create policy "Authenticated users can create workspace"
  on public.workspaces for insert with check (auth.uid() = owner_id);

-- ============================================================
-- WORKSPACE MEMBERS
-- ============================================================
create table if not exists public.workspace_members (
  id            uuid primary key default uuid_generate_v4(),
  workspace_id  uuid not null references public.workspaces(id) on delete cascade,
  user_id       uuid not null references auth.users(id) on delete cascade,
  role          text not null default 'member', -- owner | admin | member | viewer
  joined_at     timestamptz not null default now(),
  unique(workspace_id, user_id)
);

alter table public.workspace_members enable row level security;

create policy "Members can view their workspace memberships"
  on public.workspace_members for select
  using (user_id = auth.uid());

create policy "Admins can manage members"
  on public.workspace_members for all
  using (
    exists (
      select 1 from public.workspace_members wm
      where wm.workspace_id = workspace_members.workspace_id
        and wm.user_id = auth.uid()
        and wm.role in ('owner', 'admin')
    )
  );

-- ============================================================
-- SUBSCRIPTIONS
-- ============================================================
create table if not exists public.subscriptions (
  id              uuid primary key default uuid_generate_v4(),
  workspace_id    uuid not null references public.workspaces(id) on delete cascade,
  plan            text not null,                     -- starter | professional | business
  status          text not null default 'active',    -- active | cancelled | past_due
  selar_order_id  text,
  started_at      timestamptz not null default now(),
  ends_at         timestamptz,
  created_at      timestamptz not null default now()
);

alter table public.subscriptions enable row level security;

create policy "Workspace owner can view subscriptions"
  on public.subscriptions for select
  using (
    exists (
      select 1 from public.workspaces
      where id = subscriptions.workspace_id and owner_id = auth.uid()
    )
  );

-- ============================================================
-- PAYMENT EVENTS
-- Records incoming payment webhooks from Selar.
-- ============================================================
create table if not exists public.payment_events (
  id            uuid primary key default uuid_generate_v4(),
  raw_payload   jsonb not null,
  source        text not null default 'selar',
  processed     boolean not null default false,
  created_at    timestamptz not null default now()
);

-- Payment events are written server-side only (service role).
-- No RLS policies needed for user access.
alter table public.payment_events enable row level security;

-- ============================================================
-- DATA SOURCES
-- ============================================================
create table if not exists public.data_sources (
  id              uuid primary key default uuid_generate_v4(),
  workspace_id    uuid not null references public.workspaces(id) on delete cascade,
  name            text not null,
  type            text not null,  -- postgresql | mysql | supabase | csv | excel | sheets
  status          text not null default 'connecting',  -- connecting | connected | error
  -- Connection config is stored encrypted server-side, never raw credentials.
  config_ref      text,           -- reference key to encrypted secret store
  last_synced_at  timestamptz,
  created_by      uuid references auth.users(id),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

alter table public.data_sources enable row level security;

create policy "Workspace members can view data sources"
  on public.data_sources for select
  using (
    exists (
      select 1 from public.workspace_members
      where workspace_id = data_sources.workspace_id and user_id = auth.uid()
    ) or
    exists (
      select 1 from public.workspaces
      where id = data_sources.workspace_id and owner_id = auth.uid()
    )
  );

create policy "Admins can manage data sources"
  on public.data_sources for all
  using (
    exists (
      select 1 from public.workspaces
      where id = data_sources.workspace_id and owner_id = auth.uid()
    ) or
    exists (
      select 1 from public.workspace_members
      where workspace_id = data_sources.workspace_id
        and user_id = auth.uid()
        and role in ('owner', 'admin')
    )
  );

-- ============================================================
-- CONVERSATIONS
-- ============================================================
create table if not exists public.conversations (
  id            uuid primary key default uuid_generate_v4(),
  workspace_id  uuid not null references public.workspaces(id) on delete cascade,
  user_id       uuid not null references auth.users(id) on delete cascade,
  title         text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table public.conversations enable row level security;

create policy "Users can manage own conversations"
  on public.conversations for all using (user_id = auth.uid());

-- ============================================================
-- MESSAGES
-- ============================================================
create table if not exists public.messages (
  id              uuid primary key default uuid_generate_v4(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  role            text not null,  -- user | assistant
  content         text not null,
  source_ref      text,           -- data source reference used for the answer
  created_at      timestamptz not null default now()
);

alter table public.messages enable row level security;

create policy "Users can manage messages in own conversations"
  on public.messages for all
  using (
    exists (
      select 1 from public.conversations
      where id = messages.conversation_id and user_id = auth.uid()
    )
  );

-- ============================================================
-- DASHBOARDS
-- ============================================================
create table if not exists public.dashboards (
  id            uuid primary key default uuid_generate_v4(),
  workspace_id  uuid not null references public.workspaces(id) on delete cascade,
  name          text not null,
  created_by    uuid references auth.users(id),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table public.dashboards enable row level security;

create policy "Workspace members can view dashboards"
  on public.dashboards for select
  using (
    exists (
      select 1 from public.workspaces
      where id = dashboards.workspace_id and owner_id = auth.uid()
    ) or
    exists (
      select 1 from public.workspace_members
      where workspace_id = dashboards.workspace_id and user_id = auth.uid()
    )
  );

create policy "Members can create dashboards"
  on public.dashboards for insert
  with check (
    exists (
      select 1 from public.workspaces
      where id = dashboards.workspace_id and owner_id = auth.uid()
    ) or
    exists (
      select 1 from public.workspace_members
      where workspace_id = dashboards.workspace_id
        and user_id = auth.uid()
        and role in ('owner', 'admin', 'member')
    )
  );

create policy "Creator can update and delete dashboards"
  on public.dashboards for update using (created_by = auth.uid());

create policy "Creator can delete dashboards"
  on public.dashboards for delete using (created_by = auth.uid());

-- ============================================================
-- DASHBOARD WIDGETS
-- ============================================================
create table if not exists public.dashboard_widgets (
  id            uuid primary key default uuid_generate_v4(),
  dashboard_id  uuid not null references public.dashboards(id) on delete cascade,
  widget_type   text not null,   -- metric | chart | table | insight
  title         text,
  config        jsonb,           -- chart type, data query, display options
  position      jsonb,           -- {x, y, w, h}
  created_at    timestamptz not null default now()
);

alter table public.dashboard_widgets enable row level security;

create policy "Inherit dashboard access for widgets"
  on public.dashboard_widgets for all
  using (
    exists (
      select 1 from public.dashboards d
      join public.workspaces w on w.id = d.workspace_id
      where d.id = dashboard_widgets.dashboard_id
        and (w.owner_id = auth.uid() or exists (
          select 1 from public.workspace_members
          where workspace_id = w.id and user_id = auth.uid()
        ))
    )
  );

-- ============================================================
-- REPORTS
-- ============================================================
create table if not exists public.reports (
  id            uuid primary key default uuid_generate_v4(),
  workspace_id  uuid not null references public.workspaces(id) on delete cascade,
  title         text not null,
  report_type   text not null default 'custom',  -- monthly | quarterly | custom
  status        text not null default 'ready',   -- processing | ready | error
  content       jsonb,
  ai_summary    text,
  created_by    uuid references auth.users(id),
  created_at    timestamptz not null default now()
);

alter table public.reports enable row level security;

create policy "Workspace members can view reports"
  on public.reports for select
  using (
    exists (
      select 1 from public.workspaces
      where id = reports.workspace_id and owner_id = auth.uid()
    ) or
    exists (
      select 1 from public.workspace_members
      where workspace_id = reports.workspace_id and user_id = auth.uid()
    )
  );

create policy "Members can create reports"
  on public.reports for insert
  with check (
    exists (
      select 1 from public.workspaces
      where id = reports.workspace_id and owner_id = auth.uid()
    ) or
    exists (
      select 1 from public.workspace_members
      where workspace_id = reports.workspace_id
        and user_id = auth.uid()
        and role in ('owner', 'admin', 'member')
    )
  );

-- ============================================================
-- SAVED INSIGHTS
-- ============================================================
create table if not exists public.saved_insights (
  id              uuid primary key default uuid_generate_v4(),
  workspace_id    uuid not null references public.workspaces(id) on delete cascade,
  user_id         uuid not null references auth.users(id) on delete cascade,
  content         text not null,
  source_ref      text,
  conversation_id uuid references public.conversations(id) on delete set null,
  created_at      timestamptz not null default now()
);

alter table public.saved_insights enable row level security;

create policy "Users can manage own saved insights"
  on public.saved_insights for all using (user_id = auth.uid());

-- ============================================================
-- INVITATIONS
-- ============================================================
create table if not exists public.invitations (
  id            uuid primary key default uuid_generate_v4(),
  workspace_id  uuid not null references public.workspaces(id) on delete cascade,
  invited_by    uuid not null references auth.users(id),
  email         text not null,
  role          text not null default 'member',
  token         text not null unique default encode(gen_random_bytes(32), 'hex'),
  accepted      boolean not null default false,
  expires_at    timestamptz not null default (now() + interval '7 days'),
  created_at    timestamptz not null default now()
);

alter table public.invitations enable row level security;

create policy "Workspace owner and admins can manage invitations"
  on public.invitations for all
  using (
    exists (
      select 1 from public.workspaces
      where id = invitations.workspace_id and owner_id = auth.uid()
    ) or
    exists (
      select 1 from public.workspace_members
      where workspace_id = invitations.workspace_id
        and user_id = auth.uid()
        and role in ('owner', 'admin')
    )
  );

-- ============================================================
-- ACTIVITY LOGS
-- ============================================================
create table if not exists public.activity_logs (
  id            uuid primary key default uuid_generate_v4(),
  workspace_id  uuid references public.workspaces(id) on delete cascade,
  user_id       uuid references auth.users(id) on delete set null,
  action        text not null,
  entity_type   text,
  entity_id     uuid,
  metadata      jsonb,
  created_at    timestamptz not null default now()
);

alter table public.activity_logs enable row level security;

create policy "Workspace members can view activity"
  on public.activity_logs for select
  using (
    exists (
      select 1 from public.workspaces
      where id = activity_logs.workspace_id and owner_id = auth.uid()
    ) or
    exists (
      select 1 from public.workspace_members
      where workspace_id = activity_logs.workspace_id and user_id = auth.uid()
    )
  );

-- ============================================================
-- NOTIFICATION PREFERENCES
-- ============================================================
create table if not exists public.notification_preferences (
  id              uuid primary key default uuid_generate_v4(),
  user_id         uuid not null unique references auth.users(id) on delete cascade,
  ai_insights     boolean not null default true,
  report_delivery boolean not null default true,
  team_invitations boolean not null default true,
  sync_errors     boolean not null default true,
  updated_at      timestamptz not null default now()
);

alter table public.notification_preferences enable row level security;

create policy "Users can manage own notification preferences"
  on public.notification_preferences for all using (user_id = auth.uid());

-- ============================================================
-- INDEXES for performance
-- ============================================================
create index if not exists idx_conversations_user    on public.conversations(user_id);
create index if not exists idx_conversations_ws      on public.conversations(workspace_id);
create index if not exists idx_messages_conv         on public.messages(conversation_id);
create index if not exists idx_data_sources_ws       on public.data_sources(workspace_id);
create index if not exists idx_saved_insights_user   on public.saved_insights(user_id);
create index if not exists idx_activity_logs_ws      on public.activity_logs(workspace_id);
create index if not exists idx_workspace_members_ws  on public.workspace_members(workspace_id);
create index if not exists idx_workspace_members_uid on public.workspace_members(user_id);
