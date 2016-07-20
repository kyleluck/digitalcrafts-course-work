DROP TABLE IF EXISTS user_table;
CREATE TABLE user_table (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "link" varchar
);

DROP TABLE IF EXISTS repo;
CREATE TABLE repo (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "user_id" integer REFERENCES user_table (id),
  "stars" integer CHECK (stars between 0 and 5)
);

DROP TABLE IF EXISTS pull_requests;
CREATE TABLE pull_requests (
  "id" serial PRIMARY KEY,
  "repo_id" integer REFERENCES repo (id),
  "author" integer REFERENCES user_table (id),
  "description" varchar
);

DROP TABLE IF EXISTS tech;
CREATE TABLE tech (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL
);

DROP TABLE IF EXISTS tech_in_repo;
CREATE TABLE tech_in_repo (
  "repo_id" integer REFERENCES repo (id),
  "tech_id" integer REFERENCES tech (id)
);

DROP TABLE IF EXISTS commit_table;
CREATE TABLE commit_table (
  "id" serial PRIMARY KEY,
  "sha" varchar NOT NULL,
  "title" varchar NOT NULL
);

DROP TABLE IF EXISTS commits_in_repo;
CREATE TABLE commits_in_repo (
  "repo_id" integer REFERENCES repo (id),
  "commit_id" integer REFERENCES commit_table (id)
);
