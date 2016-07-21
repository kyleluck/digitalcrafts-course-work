-------------------------------------------------------------
-- * How popular is this project (based on number of stars)?
select count(stars.id), repo.name
from stars
left join repo on stars.repo_id = repo.id
group by stars.repo_id, repo.id
order by count desc;
-------------------------------------------------------------
-- * How many projects does this user have?
select 
	count(user_id) 
from 
	user_table 
left outer join
	repo on repo.user_id = user_table.id
where 
	user_table.fullname = 'Kyle Luck';
-------------------------------------------------------------
-- * List this user's projects.
select
	repo.name
from
	repo
inner join -- or left outer join will work
	user_table on repo.user_id = user_table.id
where
	user_table.username = 'kyleluck';
-------------------------------------------------------------
-- * What are this user's top 3 projects based on number of stars?
select
  repo.name, count(stars.id) as num_stars
from
  stars
left outer join
  user_table on stars.user = user_table.id
left outer join
  repo on stars.repo_id = repo.id
where
  user_table.id = 1
group by
  stars.repo_id, stars.id, user_table.id, repo.id;
-------------------------------------------------------------
-- * What are the top 3 projects overall based on the number of tech used?
select
  repo.name, count(tech.id) as number_of_technologies_used
from
  repo
left outer join
  tech_in_repo on repo.id = tech_in_repo.repo_id
left outer join
  tech on tech_in_repo.tech_id = tech.id
group by
  repo.id
order by
  number_of_technologies_used desc
limit 3;
-------------------------------------------------------------
-- * Are there more than one project with the same name?
select
  count(lower(repo.name)) as number_projects, count(distinct lower(repo.name)) as distinct_projects
from
  repo;
-------------------------------------------------------------
-- * How many contributors does each project have (include even projects that have no contributors)?
select
  repo.name, count(distinct commit_table.contributor_id) as contributors
from
  repo
left outer join
  commits_in_repo on repo.id = commits_in_repo.repo_id
left outer join
  commit_table on commits_in_repo.commit_id = commit_table.id
group by repo.name;
-------------------------------------------------------------
-- * How many projects does each user have (include even users that have no projects)?
select
  user_table.fullname, count(repo.name) as number_projects
from
  report
left outer join
  user_table on repo.user_id = user_table.id
group by
  user_table.fullname
order by
  number_projects desc;
-------------------------------------------------------------
-- * What is the average number of commits on a project?
select
  project_name, avg(number_commits) as avg_number_commits
from 
  (select repo.name as project_name, count(commit_id) as number_commits
   from
     repo
   left outer join
     commits_in_repo on repo.id = commits_in_repo.repo_id
   group by
     repo.name) as commits
group by
  project_name
order by avg_number_commits desc;
-------------------------------------------------------------
-- * What is the average number of contributors on a project?
-- average number of contributors including projects with 0 contributors
select
  avg(contributors)
from
	(select
	  repo.name, count(distinct commit_table.contributor_id) as contributors
	from
	  repo
	left outer join
	  commits_in_repo on repo.id = commits_in_repo.repo_id
	left outer join
	  commit_table on commits_in_repo.commit_id = commit_table.id
	group by repo.name) as contributors_by_repo;

-- average number of contributors excluding projects with 0 contributors
select
  avg(contributors)
from
	(select
	  repo.name, count(distinct commit_table.contributor_id) as contributors
	from
	  repo
	right outer join -- right join instead of left join
	  commits_in_repo on repo.id = commits_in_repo.repo_id
	left outer join
	  commit_table on commits_in_repo.commit_id = commit_table.id
	group by repo.name) as contributors_by_repo;
-------------------------------------------------------------
-- * What is the average number of stars on a project?
select
  avg(num_stars)
from
(select
  count(stars.id) as num_stars
from
  stars
left outer join
  repo on stars.repo_id = repo.id
group by
  repo.id) as stars_per_repo;
-------------------------------------------------------------
-- * Who are the contributors to this project?
select
  distinct user_table.fullname, repo.name
from
  repo
left outer join
  commits_in_repo on repo.id = commits_in_repo.repo_id
left outer join
  commit_table on commits_in_repo.commit_id = commit_table.id
left outer join
  user_table on commit_table.contributor_id = user_table.id
where
  repo.name = 'draw-together';
-------------------------------------------------------------
-- * Who made the most PRs (pull requests) to this project?
select
  user_table.fullname, count(author) as num_pull_requests
from 
  pull_requests
left outer join
  user_table on pull_requests.author = user_table.id
group by
  user_table.fullname
order by
  num_pull_requests desc
limit 1;
-------------------------------------------------------------
-- * What is this user's PR acceptence rate (ratio of PRs merged vs PRs unmerged)?
select
  (num_accepted::real / total) as ratio_of_accepted
from
	(select
	  fullname, sum(case when (accepted = true) then 1 else 0 end) as num_accepted, sum(case when (accepted = false) then 1 else 0 end) as num_rejected, count(accepted) as total
	from
	  pull_requests
	left outer join
	  user_table on pull_requests.author = user_table.id
	where
	  author = 1
	group by
	  user_table.id) as accepted_rejected;
	  
-------------------------------------------------------------
-- * What tech does this project use?
select
  tech.name, repo.name
from
  tech
left outer join
  tech_in_repo on tech.id = tech_in_repo.tech_id
left outer join
  repo on tech_in_repo.repo_id = repo.id
where
  repo.name = 'the-transcluders';
-------------------------------------------------------------
-- * What tech does this user know - based on the tech used in his projects?
select
  distinct on (tech.name, repo.user_id) user_table.fullname, tech.name
from
  repo
inner join
  tech_in_repo on repo.id = tech_in_repo.repo_id	
inner join
  tech on tech_in_repo.tech_id = tech.id
inner join
  user_table on repo.user_id = user_table.id
where
  user_table.fullname = 'Kyle Luck';
-------------------------------------------------------------
-- * Who are the top 3 contributors to this project based on number of commits?
select 
  count(commit_table.id) as num_commits, fullname
from 
  commit_table
right outer join
  user_table on contributor_id = user_table.id
group by contributor_id, fullname
order by num_commits desc
limit 3;
-------------------------------------------------------------
-- * What are this user's top 3 projects based on number of commits?
select 
  count(commits_in_repo.commit_id) as num_commits, repo.name
from 
  commits_in_repo
left outer join
  repo on commits_in_repo.repo_id = repo.id
group by repo_id, repo.name
order by num_commits desc
limit 3;
-------------------------------------------------------------
-- * Write a query to enable plotting a project's commit activity by date.
select 
  repo.name, commit_table.timestamp, commit_table.title
from 
  commit_table
left outer join
  commits_in_repo on commit_table.id = commits_in_repo.commit_id
left outer join
  repo on commits_in_repo.repo_id = repo.id
group by repo.name, commit_table.timestamp, commit_table.title
order by repo.name, timestamp desc;
-------------------------------------------------------------
-- * Write a query to enable plotting a user's number of commits by date.
select
  user_table.fullname, count(*) as num_commits, commit_table.timestamp::date 
from
  commit_table
left outer join
  user_table on commit_table.contributor_id = user_table.id
where
  user_table.fullname = 'Kyle Luck'
group by
  commit_table.timestamp::date, user_table.fullname;
-------------------------------------------------------------