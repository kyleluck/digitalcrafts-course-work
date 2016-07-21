# Database Indices

## Outline

* why?
  * because table scans (looping through each row) is slow
  * want to find data by looking up a specific field
  * want to speed up table joins
* types
  * hash indices
  * b-tree indices
* why not just index all the column?
  * it takes up a lot of space
* binary trees

* hash indices - uses hash tables, can only do exact matches: such as
        `select * from account where name = 'Toby Ho';`
* b-tree indices, can also do >, < comparisons
        `select * from project where stars > 100;`
        and sorting
        `select * from project order by stars desc limit 5;`

## Binary

Operations:

* lookup    O(log n)
* insert    O(log n)
* traversal O(n)
* delete    O(log n)

## Syntax

create index on users (name);

create index on user_projects (project_member_id);

## How can this query use an index?

select * from account where name = 'Toby Ho';

select * from reviews where stars = 5;

select * from projects where stars > 100;

## How can this query use an index?

```
select
	tweet.content
from
	author
left outer join
	tweet on author.id = tweet.author_id
where
	author.name = 'phamous2day';
```

What about this one?

```
select
  project.name, coder.name
from
  project
left outer join
  project_membership on project.id = project_membership.project_id
left outer join
  coder on project_membership.coder_id = coder.id
where
  project.name = 'Draw Together';
```
