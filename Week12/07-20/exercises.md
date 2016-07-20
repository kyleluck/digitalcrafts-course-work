# Projects DB Exercises

## Setup

Create a new database called projects_db or whatever you want. Restore the database from the projects.sql file via the command:

psql projects_db < projects.sql

## Problems

* Do a cartesian join between the project table and the tech table
  *select * from project, tech;*

* Perform a left outer join between the project table and the project_uses_tech tables
  *select * from project
  left outer join
  project_uses_tech on project.id = project_uses_tech.project_id;*

* Perform a left outer join between the tech table and the project_uses_tech table
  *select * from tech
  left outer join
  project_uses_tech on tech.id = project_uses_tech.project_id;*

* Perform a left outer join from the project table to the project_users_tech table and then left outer join again to the tech table.
  *select * from project
  left outer join
  project_uses_tech on project.id = project_uses_tech.project_id
  left outer join
  tech on tech.id = project_uses_tech.tech_id;*

* Start from the answer on the previous problem and get the count of how many different tech each project uses
  *select
    project.name, count(tech.id)
  from project
  left outer join
    project_uses_tech on project.id = project_uses_tech.project_id
  left outer join
    tech on tech.id = project_uses_tech.tech_id
  group by
    project.name;*

* For each tech, get the count of how many projects use it
  *select
    tech.name, count(project.id) as num_projects
  from
    tech
  left outer join
    project_uses_tech on tech.id = project_uses_tech.tech_id
  left outer join
    project on project_uses_tech.project_id = project.id
  group by
    tech.id
  order by
    num_projects desc;*

* Rank each project by how many tech it uses
  *select
    project.name, count(tech.id) as num_tech
  from
    project
  left outer join
    project_uses_tech on  project.id = project_uses_tech.project_id
  left outer join
    tech on project_uses_tech.tech_id = tech.id
  group by
    project.id
  order by
    num_tech desc*

* Rank each tech by how many projects use it
  *select
    tech.name, count(project.id) as num_projects
  from
    tech
  left outer join
    project_uses_tech on tech.id = project_uses_tech.tech_id
  left outer join
    project on project_uses_tech.project_id = project.id
  group by
    tech.id
  order by
    num_projects desc*

* What is the average number of techs used by a project?
  *select
    avg(num_techs)
  from
    (select
      project_id, count(tech_id) as num_techs
    from
      project_uses_tech
    group by
      project_id) t*

  5.0909090909
  *in my opinion, this is the correct answer because a project using 0 techs should not count toward the average. after all, the question was avg number of techs USED by a project*

**
  sum(case when project_uses_tech.tech_id is null then 0 else 1 end) as count2
**

**
  char_length(tweet.tweet) as tweet_length
**
