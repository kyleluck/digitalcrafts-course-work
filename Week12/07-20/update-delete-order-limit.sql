



-- Syntax
-- update TABLE_NAME set COLUMN_NAME = VALUE

-- Redact a tweet: set the content of tweet #2 to '(redacted)'
update tweet set tweet = '(redacted)' where id = 2;












-- Make all tweets anonymous
update tweet set author_id = NULL;









-- Syntax
-- delete from TABLE_NAME where CONDITIONAL

-- Delete a tweet
delete from tweet where id = 125;










-- Deletes all tweets
delete from tweet;








-- Distinct

select distinct name from student;












-- Distinct combo

select
  distinct on (name, website)
  name, website
from
  student





select distinct name, website from student;


select distinct on (name, website) name, website, points, github_username from student;



-- order by

select
	name, website, points, github_username
from
	student
order by
	points
;

-- ascending (default)

select
	name, website, points, github_username
from
	student
order by
	points asc
;

-- descending

select
	name, website, points, github_username
from
	student
order by
	points desc
;

-- order by multiple columns

select
	name, website, points, github_username
from
	student
order by
	points asc, name
;

-- limit

select
	name, website, points, github_username
from
	student
order by
	points asc, name
limit 5
;
