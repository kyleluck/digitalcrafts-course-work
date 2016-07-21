-- * How popular is this project (based on number of stars)?

select
	star_amount
from
	projects
where
	name = 'PictionaryGame';

-- * How many projects does this user have?

select
	count(*)
from
	users
inner join
	user_projects on users.id = user_projects.project_member_id
where
	users.name = 'David Pham';

-- * List this user's projects.

select
	projects.name
from
	users
inner join
	user_projects on users.id = user_projects.project_member_id
inner join
	projects on projects.id = user_projects.project_id
where
	users.name = 'David Pham';

-- * What are this user's top 3 projects based on number of stars?

select
	projects.name, projects.star_amount
from
	users
inner join
	user_projects on users.id = user_projects.project_member_id
inner join
	projects on projects.id = user_projects.project_id
where
	users.name = 'David Pham'
order by
	projects.star_amount desc
limit 3
;

-- * What are the top 3 projects overall based on the number of tech used?

select
	projects.id,
	projects.name,
	count(technologies.id) as tech_count
from
	projects
left outer join
	project_techs on projects.id = project_techs.project_id
left outer join
	technologies on technologies.id = project_techs.tech_id
group by
	projects.id
order by
	tech_count desc
limit
	3

-- * Are there more than one project with the same name?

-- if the count distinct number is less than the count(*) number,
-- there are some duplicates
select
	count(distinct name)
from
	users

-- * How many contributors does each project have (include even projects that have no contributors)?

select
	count(user_projects.id) as contributor_count,
	projects.id,
	projects.name
from
	projects
left outer join
	user_projects on projects.id = user_projects.project_id
where
	projects.name in ('TicTacToe', 'CanvasGame', 'PictionaryGame')
group by
	projects.id;

-- * How many projects does each user have (include even users that have no projects)?

select
	users.id,
	users.name,
	count(user_projects.id) as project_count
from
	users
left outer join
	user_projects on users.id = user_projects.project_member_id
group by
	users.id;

-- * What is the average number of commits on a project?
-- * What is the average number of contributors on a project?

select
	avg(contributor_count)
from
	(select
		count(user_projects.id) as contributor_count,
		projects.id,
		projects.name
	from
		projects
	left outer join
		user_projects on projects.id = user_projects.project_id
	group by
		projects.id) as project_by_contributor_count

-- * What is the average number of stars on a project?
-- * Who are the contributors to this project?
-- * Who made the most PRs (pull requests) to this project?

-- * What is this user's PR acceptence rate (ratio of PRs merged vs PRs unmerged)?

-- * What tech does this project use?

-- * What tech does this user know - based on the tech used in his projects?

select
	count(tech_name)
from
	users
inner join
	user_projects on users.id = user_projects.project_member_id
inner join
	projects on projects.id = user_projects.project_id
inner join
	project_techs on projects.id = project_techs.project_id
inner join
	technologies on technologies.id = project_techs.tech_id
where
	users.name = 'David Pham'
;

-- or to get the list of techs

select
	distinct tech_name
from
	users
inner join
	user_projects on users.id = user_projects.project_member_id
inner join
	projects on projects.id = user_projects.project_id
inner join
	project_techs on projects.id = project_techs.project_id
inner join
	technologies on technologies.id = project_techs.tech_id
where
	users.name = 'David Pham'
;

-- The technologies that Dave actually knows (he used it on 5 or more projects)

select
	count(*) as times_used,
	tech_name
from
	users
inner join
	user_projects on users.id = user_projects.project_member_id
inner join
	projects on projects.id = user_projects.project_id
inner join
	project_techs on projects.id = project_techs.project_id
inner join
	technologies on technologies.id = project_techs.tech_id
where
	users.name = 'David Pham'
group by
	tech_name
having count(*) >= 5
;

-- * Who are the top 3 contributors to this project based on number of commits?
-- * What are this user's top 3 projects based on number of commits?
-- * Write a query to enable plotting a project's commit activity by date.
-- * Write a query to enable plotting a user's number of commits by date.
