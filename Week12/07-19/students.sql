CREATE TABLE student (
  -- auto-incrementing ID, is unique, and is auto-incremented for each new row
  -- when you insert it
  -- *DO NOT* specifiy the id when you insert if you are using an auto-incrementing ID
  -- Specifying the UNIQUE constraint because serial does not require uniqueness
  id serial UNIQUE,
  name varchar NOT NULL,
  website varchar,
  github_username varchar,
  points integer DEFAULT 0 CHECK (points >= 0),
  gender char(1),
  cohort_start_date date NOT NULL,
  graduated boolean DEFAULT FALSE
);
