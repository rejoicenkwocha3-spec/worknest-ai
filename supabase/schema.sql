-- RemoteSite Database Schema
-- Safe to re-run against any existing Supabase project

-- ─────────────────────────────────────────
-- PROFILES
-- ─────────────────────────────────────────
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles add column if not exists full_name text;
alter table public.profiles add column if not exists avatar_url text;
alter table public.profiles add column if not exists created_at timestamptz default now();
alter table public.profiles add column if not exists updated_at timestamptz default now();

alter table public.profiles enable row level security;

drop policy if exists "Users can view own profile" on public.profiles;
drop policy if exists "Users can update own profile" on public.profiles;
drop policy if exists "Users can insert own profile" on public.profiles;

create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile"
  on public.profiles for insert with check (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name')
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─────────────────────────────────────────
-- PROJECTS
-- ─────────────────────────────────────────
create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  name text not null,
  description text,
  location text,
  status text not null default 'active',
  completion_pct integer not null default 0,
  start_date date,
  end_date date,
  budget numeric(12,2),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.projects add column if not exists user_id uuid references auth.users on delete cascade;
alter table public.projects add column if not exists description text;
alter table public.projects add column if not exists location text;
alter table public.projects add column if not exists status text not null default 'active';
alter table public.projects add column if not exists completion_pct integer not null default 0;
alter table public.projects add column if not exists start_date date;
alter table public.projects add column if not exists end_date date;
alter table public.projects add column if not exists budget numeric(12,2);
alter table public.projects add column if not exists created_at timestamptz default now();
alter table public.projects add column if not exists updated_at timestamptz default now();

alter table public.projects enable row level security;

drop policy if exists "Users can view own projects" on public.projects;
drop policy if exists "Users can insert own projects" on public.projects;
drop policy if exists "Users can update own projects" on public.projects;
drop policy if exists "Users can delete own projects" on public.projects;

create policy "Users can view own projects"
  on public.projects for select using (auth.uid() = user_id);
create policy "Users can insert own projects"
  on public.projects for insert with check (auth.uid() = user_id);
create policy "Users can update own projects"
  on public.projects for update using (auth.uid() = user_id);
create policy "Users can delete own projects"
  on public.projects for delete using (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- MILESTONES
-- ─────────────────────────────────────────
create table if not exists public.milestones (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects on delete cascade not null,
  title text not null,
  description text,
  status text not null default 'pending',
  completion_pct integer not null default 0,
  planned_date date,
  actual_date date,
  created_at timestamptz default now()
);

alter table public.milestones add column if not exists project_id uuid references public.projects on delete cascade;
alter table public.milestones add column if not exists description text;
alter table public.milestones add column if not exists status text not null default 'pending';
alter table public.milestones add column if not exists completion_pct integer not null default 0;
alter table public.milestones add column if not exists planned_date date;
alter table public.milestones add column if not exists actual_date date;
alter table public.milestones add column if not exists created_at timestamptz default now();

alter table public.milestones enable row level security;

drop policy if exists "Users can manage own milestones" on public.milestones;

create policy "Users can manage own milestones"
  on public.milestones for all
  using (
    exists (
      select 1 from public.projects p
      where p.id = milestones.project_id
        and p.user_id = auth.uid()
    )
  );

-- ─────────────────────────────────────────
-- SITE MEDIA
-- ─────────────────────────────────────────
create table if not exists public.site_media (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects on delete cascade not null,
  user_id uuid references auth.users on delete cascade not null,
  url text not null,
  description text,
  media_type text not null default 'photo',
  uploaded_at timestamptz default now()
);

alter table public.site_media add column if not exists project_id uuid references public.projects on delete cascade;
alter table public.site_media add column if not exists user_id uuid references auth.users on delete cascade;
alter table public.site_media add column if not exists description text;
alter table public.site_media add column if not exists media_type text not null default 'photo';
alter table public.site_media add column if not exists uploaded_at timestamptz default now();

alter table public.site_media enable row level security;

drop policy if exists "Users can manage own site media" on public.site_media;

create policy "Users can manage own site media"
  on public.site_media for all using (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- ISSUES
-- ─────────────────────────────────────────
create table if not exists public.issues (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects on delete cascade not null,
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  description text,
  priority text not null default 'medium',
  status text not null default 'open',
  assigned_to uuid references auth.users,
  due_date date,
  photo_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.issues add column if not exists project_id uuid references public.projects on delete cascade;
alter table public.issues add column if not exists user_id uuid references auth.users on delete cascade;
alter table public.issues add column if not exists description text;
alter table public.issues add column if not exists priority text not null default 'medium';
alter table public.issues add column if not exists status text not null default 'open';
alter table public.issues add column if not exists assigned_to uuid references auth.users;
alter table public.issues add column if not exists due_date date;
alter table public.issues add column if not exists photo_url text;
alter table public.issues add column if not exists created_at timestamptz default now();
alter table public.issues add column if not exists updated_at timestamptz default now();

alter table public.issues enable row level security;

drop policy if exists "Users can manage own issues" on public.issues;

create policy "Users can manage own issues"
  on public.issues for all using (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- REPORTS
-- ─────────────────────────────────────────
create table if not exists public.reports (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects on delete set null,
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  content text,
  created_at timestamptz default now()
);

alter table public.reports add column if not exists project_id uuid references public.projects on delete set null;
alter table public.reports add column if not exists user_id uuid references auth.users on delete cascade;
alter table public.reports add column if not exists content text;
alter table public.reports add column if not exists created_at timestamptz default now();

alter table public.reports enable row level security;

drop policy if exists "Users can manage own reports" on public.reports;

create policy "Users can manage own reports"
  on public.reports for all using (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- DOCUMENTS
-- ─────────────────────────────────────────
create table if not exists public.documents (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects on delete set null,
  user_id uuid references auth.users on delete cascade not null,
  name text not null,
  url text not null,
  file_type text,
  size_bytes bigint,
  uploaded_at timestamptz default now()
);

alter table public.documents add column if not exists project_id uuid references public.projects on delete set null;
alter table public.documents add column if not exists user_id uuid references auth.users on delete cascade;
alter table public.documents add column if not exists file_type text;
alter table public.documents add column if not exists size_bytes bigint;
alter table public.documents add column if not exists uploaded_at timestamptz default now();

alter table public.documents enable row level security;

drop policy if exists "Users can manage own documents" on public.documents;

create policy "Users can manage own documents"
  on public.documents for all using (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- TEAM MEMBERS
-- ─────────────────────────────────────────
create table if not exists public.team_members (
  id uuid default gen_random_uuid() primary key,
  invited_by uuid references auth.users on delete cascade not null,
  email text not null,
  full_name text,
  role text not null default 'viewer',
  status text not null default 'invited',
  invited_at timestamptz default now()
);

alter table public.team_members add column if not exists invited_by uuid references auth.users on delete cascade;
alter table public.team_members add column if not exists full_name text;
alter table public.team_members add column if not exists role text not null default 'viewer';
alter table public.team_members add column if not exists status text not null default 'invited';
alter table public.team_members add column if not exists invited_at timestamptz default now();

alter table public.team_members enable row level security;

drop policy if exists "Users can manage their team members" on public.team_members;

create policy "Users can manage their team members"
  on public.team_members for all using (auth.uid() = invited_by);

-- ─────────────────────────────────────────
-- NOTIFICATIONS
-- ─────────────────────────────────────────
create table if not exists public.notifications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  project_id uuid references public.projects on delete set null,
  title text not null,
  body text,
  type text not null default 'info',
  read boolean not null default false,
  created_at timestamptz default now()
);

alter table public.notifications add column if not exists user_id uuid references auth.users on delete cascade;
alter table public.notifications add column if not exists project_id uuid references public.projects on delete set null;
alter table public.notifications add column if not exists body text;
alter table public.notifications add column if not exists type text not null default 'info';
alter table public.notifications add column if not exists read boolean not null default false;
alter table public.notifications add column if not exists created_at timestamptz default now();

alter table public.notifications enable row level security;

drop policy if exists "Users can view own notifications" on public.notifications;
drop policy if exists "Users can update own notifications" on public.notifications;

create policy "Users can view own notifications"
  on public.notifications for select using (auth.uid() = user_id);
create policy "Users can update own notifications"
  on public.notifications for update using (auth.uid() = user_id);
