CREATE TABLE restaurant (
  id serial PRIMARY KEY,
  name varchar NOT NULL,
  distance real,
  stars integer CHECK (stars > 0 and stars <= 5),
  category varchar[],
  favorite_dish varchar,
  takeout boolean DEFAULT FALSE,
  last_time_there timestamp
);
