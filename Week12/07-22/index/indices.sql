-- When to index





-- Situation 1: looking for specific value

select
  *
from
  restaurant
where
  name = 'NaanStop';

-- solution:

CREATE INDEX on restaurant (name);










-- Situation 2: sorting

select
  *
from
  reviewer
order by
  stars desc
limit
  5;

-- Situation 3: join

select
	tweet.content
from
	author
left outer join
	tweet on author.id = tweet.author_id
where
	author.name = 'phamous2day';
