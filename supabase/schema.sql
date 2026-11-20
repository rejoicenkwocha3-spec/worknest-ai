-- Shield Pro AI Database Schema
-- Run this in your Supabase SQL Editor

-- ─────────────────────────────────────────
-- PROFILES
-- ─────────────────────────────────────────
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  avatar_url text,
  role text default 'member' check (role in ('admin', 'analyst', 'viewer', 'member')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─────────────────────────────────────────
-- ORGANIZATIONS
-- ─────────────────────────────────────────
create table if not exists public.organizations (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text unique,
  industry text,
  owner_id uuid references auth.users on delete cascade not null,
  created_at timestamptz default now()
);

alter table public.organizations enable row level security;

create policy "Org members can view organization"
  on public.organizations for select
  using (
    owner_id = auth.uid() or
    exists (select 1 from public.organization_members where org_id = organizations.id and user_id = auth.uid())
  );

create policy "Org owner can update"
  on public.organizations for update using (owner_id = auth.uid());

create policy "Authenticated users can create orgs"
  on public.organizations for insert with check (auth.uid() = owner_id);

-- ─────────────────────────────────────────
-- ORGANIZATION MEMBERS
-- ─────────────────────────────────────────
create table if not exists public.organization_members (
  id uuid default gen_random_uuid() primary key,
  org_id uuid references public.organizations on delete cascade not null,
  user_id uuid references auth.users on delete cascade not null,
  role text not null default 'analyst' check (role in ('admin', 'analyst', 'viewer')),
  joined_at timestamptz default now(),
  unique (org_id, user_id)
);

alter table public.organization_members enable row level security;

create policy "Members can view org members"
  on public.organization_members for select
  using (user_id = auth.uid() or exists (
    select 1 from public.organizations where id = organization_members.org_id and owner_id = auth.uid()
  ));

-- ─────────────────────────────────────────
-- SUBSCRIPTIONS
-- ─────────────────────────────────────────
create table if not exists public.subscriptions (
  id uuid default gen_random_uuid() primary key,
  org_id uuid references public.organizations on delete cascade not null,
  user_id uuid references auth.users on delete cascade,
  plan text not null default 'free' check (plan in ('free', 'starter', 'professional', 'enterprise')),
  status text not null default 'active' check (status in ('active', 'cancelled', 'past_due', 'trialing')),
  selar_reference text,
  selar_order_id text,
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.subscriptions enable row level security;

create policy "Org owner can view subscription"
  on public.subscriptions for select
  using (user_id = auth.uid() or exists (
    select 1 from public.organizations where id = subscriptions.org_id and owner_id = auth.uid()
  ));

-- ─────────────────────────────────────────
-- PAYMENTS
-- ─────────────────────────────────────────
create table if not exists public.payments (
  id uuid default gen_random_uuid() primary key,
  org_id uuid references public.organizations on delete cascade,
  user_id uuid references auth.users on delete cascade,
  subscription_id uuid references public.subscriptions on delete set null,
  amount numeric,
  currency text default 'USD',
  selar_reference text,
  status text check (status in ('pending', 'completed', 'failed', 'refunded')),
  created_at timestamptz default now()
);

alter table public.payments enable row level security;

create policy "Org owner can view payments"
  on public.payments for select using (user_id = auth.uid());

-- ─────────────────────────────────────────
-- SECURITY EVENTS
-- ─────────────────────────────────────────
create table if not exists public.security_events (
  id uuid default gen_random_uuid() primary key,
  org_id uuid references public.organizations on delete cascade not null,
  event_type text not null,
  severity text check (severity in ('critical', 'high', 'medium', 'low', 'info')),
  source text,
  target text,
  description text,
  raw_data jsonb,
  status text default 'open' check (status in ('open', 'investigating', 'resolved', 'closed')),
  detected_at timestamptz default now(),
  created_at timestamptz default now()
);

alter table public.security_events enable row level security;

create policy "Org members can view security events"
  on public.security_events for select
  using (exists (
    select 1 from public.organizations o
    left join public.organization_members om on om.org_id = o.id
    where o.id = security_events.org_id and (o.owner_id = auth.uid() or om.user_id = auth.uid())
  ));

-- ─────────────────────────────────────────
-- THREATS
-- ─────────────────────────────────────────
create table if not exists public.threats (
  id uuid default gen_random_uuid() primary key,
  org_id uuid references public.organizations on delete cascade not null,
  event_id uuid references public.security_events on delete set null,
  threat_type text not null,
  classification text,
  severity text check (severity in ('critical', 'high', 'medium', 'low')),
  target text,
  status text default 'active' check (status in ('active', 'mitigating', 'resolved', 'blocked')),
  details jsonb,
  detected_at timestamptz default now(),
  resolved_at timestamptz
);

alter table public.threats enable row level security;

create policy "Org members can view threats"
  on public.threats for select
  using (exists (
    select 1 from public.organizations o
    left join public.organization_members om on om.org_id = o.id
    where o.id = threats.org_id and (o.owner_id = auth.uid() or om.user_id = auth.uid())
  ));

-- ─────────────────────────────────────────
-- INCIDENTS
-- ─────────────────────────────────────────
create table if not exists public.incidents (
  id uuid default gen_random_uuid() primary key,
  org_id uuid references public.organizations on delete cascade not null,
  title text not null,
  description text,
  severity text check (severity in ('critical', 'high', 'medium', 'low')),
  status text default 'open' check (status in ('open', 'investigating', 'contained', 'resolved', 'closed')),
  assignee_id uuid references auth.users on delete set null,
  created_by uuid references auth.users on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  resolved_at timestamptz
);

alter table public.incidents enable row level security;

create policy "Org members can view incidents"
  on public.incidents for select
  using (exists (
    select 1 from public.organizations o
    left join public.organization_members om on om.org_id = o.id
    where o.id = incidents.org_id and (o.owner_id = auth.uid() or om.user_id = auth.uid())
  ));

create policy "Org members can create incidents"
  on public.incidents for insert
  with check (exists (
    select 1 from public.organizations o
    left join public.organization_members om on om.org_id = o.id
    where o.id = org_id and (o.owner_id = auth.uid() or om.user_id = auth.uid())
  ));

create policy "Org members can update incidents"
  on public.incidents for update
  using (exists (
    select 1 from public.organizations o
    left join public.organization_members om on om.org_id = o.id
    where o.id = incidents.org_id and (o.owner_id = auth.uid() or om.user_id = auth.uid())
  ));

-- ─────────────────────────────────────────
-- SECURITY REPORTS
-- ─────────────────────────────────────────
create table if not exists public.security_reports (
  id uuid default gen_random_uuid() primary key,
  org_id uuid references public.organizations on delete cascade not null,
  title text not null,
  report_type text,
  period_start timestamptz,
  period_end timestamptz,
  content jsonb,
  created_by uuid references auth.users on delete set null,
  created_at timestamptz default now()
);

alter table public.security_reports enable row level security;

create policy "Org members can view reports"
  on public.security_reports for select
  using (exists (
    select 1 from public.organizations o
    left join public.organization_members om on om.org_id = o.id
    where o.id = security_reports.org_id and (o.owner_id = auth.uid() or om.user_id = auth.uid())
  ));

-- ─────────────────────────────────────────
-- INTEGRATIONS
-- ─────────────────────────────────────────
create table if not exists public.integrations (
  id uuid default gen_random_uuid() primary key,
  org_id uuid references public.organizations on delete cascade not null,
  integration_type text not null,
  name text,
  status text default 'disconnected' check (status in ('connected', 'disconnected', 'error')),
  config jsonb,
  connected_at timestamptz,
  created_at timestamptz default now()
);

alter table public.integrations enable row level security;

create policy "Org admins can manage integrations"
  on public.integrations for all
  using (exists (
    select 1 from public.organizations where id = integrations.org_id and owner_id = auth.uid()
  ));

-- ─────────────────────────────────────────
-- NOTIFICATIONS
-- ─────────────────────────────────────────
create table if not exists public.notifications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  org_id uuid references public.organizations on delete cascade,
  title text not null,
  message text,
  type text,
  read boolean default false,
  created_at timestamptz default now()
);

alter table public.notifications enable row level security;

create policy "Users can view own notifications"
  on public.notifications for select using (user_id = auth.uid());

create policy "Users can update own notifications"
  on public.notifications for update using (user_id = auth.uid());

-- ─────────────────────────────────────────
-- AUDIT LOGS
-- ─────────────────────────────────────────
create table if not exists public.audit_logs (
  id uuid default gen_random_uuid() primary key,
  org_id uuid references public.organizations on delete cascade,
  user_id uuid references auth.users on delete set null,
  action text not null,
  resource_type text,
  resource_id uuid,
  meta jsonb,
  ip_address text,
  created_at timestamptz default now()
);

alter table public.audit_logs enable row level security;

create policy "Org admins can view audit logs"
  on public.audit_logs for select
  using (exists (
    select 1 from public.organizations where id = audit_logs.org_id and owner_id = auth.uid()
  ));

create policy "System can insert audit logs"
  on public.audit_logs for insert with check (true);
