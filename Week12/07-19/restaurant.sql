CREATE TABLE restaurant (
  id serial UNIQUE,
  name varchar NOT NULL,
  distance real,
  stars integer,
  category varchar,
  favorite_dish varchar,
  takeout boolean DEFAULT FALSE,
  last_time_there timestamp
);
