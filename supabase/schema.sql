-- RemoteSite Database Schema
-- Run in Supabase SQL Editor

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

alter table public.profiles enable row level security;

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
  values (new.id, new.raw_user_meta_data->>'full_name');
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
  status text not null default 'active' check (status in ('active', 'on_track', 'at_risk', 'delayed', 'paused', 'completed')),
  completion_pct integer not null default 0 check (completion_pct >= 0 and completion_pct <= 100),
  start_date date,
  end_date date,
  budget numeric(12,2),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.projects enable row level security;

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
  status text not null default 'pending' check (status in ('pending', 'in_progress', 'completed', 'delayed')),
  completion_pct integer not null default 0 check (completion_pct >= 0 and completion_pct <= 100),
  planned_date date,
  actual_date date,
  created_at timestamptz default now()
);

alter table public.milestones enable row level security;

create policy "Users can manage own milestones"
  on public.milestones for all
  using (
    exists (select 1 from public.projects where id = milestones.project_id and user_id = auth.uid())
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
  media_type text not null default 'photo' check (media_type in ('photo', 'video')),
  uploaded_at timestamptz default now()
);

alter table public.site_media enable row level security;

create policy "Users can manage own site media"
  on public.site_media for all
  using (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- ISSUES
-- ─────────────────────────────────────────
create table if not exists public.issues (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references public.projects on delete cascade not null,
  user_id uuid references auth.users on delete cascade not null,
  title text not null,
  description text,
  priority text not null default 'medium' check (priority in ('critical', 'high', 'medium', 'low')),
  status text not null default 'open' check (status in ('open', 'in_progress', 'resolved', 'closed')),
  assigned_to uuid references auth.users,
  due_date date,
  photo_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.issues enable row level security;

create policy "Users can manage own issues"
  on public.issues for all
  using (auth.uid() = user_id);

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

alter table public.reports enable row level security;

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

alter table public.documents enable row level security;

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
  role text not null default 'viewer' check (role in ('admin', 'project_manager', 'engineer', 'contractor', 'viewer')),
  status text not null default 'invited' check (status in ('invited', 'active', 'inactive')),
  invited_at timestamptz default now()
);

alter table public.team_members enable row level security;

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
  type text not null default 'info' check (type in ('info', 'warning', 'success', 'error')),
  read boolean not null default false,
  created_at timestamptz default now()
);

alter table public.notifications enable row level security;

create policy "Users can view own notifications"
  on public.notifications for select using (auth.uid() = user_id);

create policy "Users can update own notifications"
  on public.notifications for update using (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- STORAGE BUCKETS
-- ─────────────────────────────────────────
-- Run these in the Supabase Storage settings or via API:
-- 1. Create bucket: site-media (public: true)
-- 2. Create bucket: documents (public: false)
