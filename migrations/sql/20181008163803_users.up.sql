create table app_public.users (
  id serial primary key,
  email citext not null unique,
  name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table app_public.users enable row level security;

create role anonymous_user;
create role admin_user;
