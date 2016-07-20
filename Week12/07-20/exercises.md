# Projects DB Exercises

## Setup

Create a new database called projects_db or whatever you want. Restore the database from the projects.sql file via the command:

psql projects_db < projects.sql

## Problems

* Do a cartesian join between the project table and the tech table
  select * from project, tech;

* Perform a left outer join between the project table and the project_uses_tech tables
  select * from project
  left outer join
  project_uses_tech on project.id = project_uses_tech.project_id;

* Perform a left outer join between the tech table and the project_uses_tech table
  select * from tech
  left outer join
  project_uses_tech on tech.id = project_uses_tech.project_id;

* Perform a left outer join from the project table to the project_users_tech table and then left outer join again to the tech table.
  select * from project
  left outer join
  project_uses_tech on project.id = project_uses_tech.project_id
  left outer join
  tech on tech.id = project_uses_tech.tech_id;

* Start from the answer on the previous problem and get the count of how many different tech each project uses
  select
    project.name, count(distinct project_uses_tech.tech_id)
  from project
  left outer join
    project_uses_tech on project.id = project_uses_tech.project_id
  left outer join
    tech on tech.id = project_uses_tech.tech_id
  group by
    project.name;
    
* For each tech, get the count of how many projects use it

* Rank each project by how many tech it uses

* Rank each tech by how many projects use it

* What is the average number of techs used by a project?
