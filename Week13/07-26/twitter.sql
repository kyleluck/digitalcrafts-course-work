select
    tweet.content,
    tweet.image,
    tweet.category,
    tweet.created_at,
    user_table.username,
    user_table.userfull,
    user_table.avatar,
    (case when (now() - tweet.created_at > '59 minutes'::interval) 
    	then to_char(tweet.created_at, 'Month DD')
    	else concat(to_char(age(now(), tweet.created_at), 'MI'), ' mins ago')
    	end) as time_display,
    --extract(minutes from age(now(), tweet.created_at)) as mins_since_posted,
    --extract(days from age(now(), tweet.created_at)) as days_since_posted,
    --to_char(tweet.created_at, 'Month DD') as month_day_posted,
    now() - tweet.created_at as test,
    (now() - tweet.created_at > '59 minutes'::interval) 
from
    tweet
inner join
    user_table on tweet.user_id = user_table.id;
                
                
                
select
    user_table.bio,
    user_table.username,
    user_table.userfull,
    user_table.website,
    user_table.avatar,
    user_table.joined,
    to_char(joined, 'Month YYYY') as joined_display,
    count(follower.user_id) as followers,
    count(follower.followed_by) as follows
from
    user_table
inner join
    follower on user_table.id = follower.user_id
where
    username = 'kyleluck'
group by
    user_table.id;

select
    user_table.id,
    user_table.bio,
    user_table.username,
    user_table.userfull,
    user_table.website,
    user_table.avatar,
    user_table.joined,
    to_char(joined, 'Month YYYY') as joined_display,
    followers,
    follows
from
	user_table
full outer join
	(select
	  follows, followers, user_id
	from (   
		select
			count(followed_by) as followers,
			followed_by
		from
		  follower
		where 
		  followed_by = 3
		group by
		  followed_by) as follows_query
		full outer join
		  (select
			count(user_id) as follows,
			user_id
		from
		  follower
		where 
		  user_id = 3
		group by
		  follower.user_id) as followers_query on user_id = followed_by) as follows_followers on follower.user_id = user_table.id
where user_table.id = 3;
  

select
	count(user_id) as follows
from
  follower
where 
  user_id = 3;             
             
             
select
	  follows, followers
from (   
	select
		count(followed_by) as followers,
		followed_by
	from
	  follower
	where 
	  followed_by = 3
	group by
	  followed_by) as follows_query
	full outer join
	  (select
		count(user_id) as follows,
		user_id
	from
	  follower
	where 
	  user_id = 3
	group by
	  follower.user_id) as followers_query on user_id = followed_by;



select
    count(id),
    (case when (now() - tweet.created_at > '59 minutes'::interval)
        then to_char(tweet.created_at, 'Month DD')
        else concat(to_char(age(now(), tweet.created_at), 'MI'), ' mins ago')
        end) as time_display
from
    tweet
where
    user_id = 3
group by
	id;
	
	
select
    *
from
    tweet
full outer join
    user_table on tweet.user_id = user_table.id
where
    tweet.user_id = 3;
            
select
    *
from
    tweet
full outer join
    user_table on tweet.user_id = user_table.id
where
    tweet.user_id = 3 or
    tweet.user_id in (
        select user_id from follower where followed_by = 3
    );
            
            
            
select
    tweet.id,
    tweet.content,
    tweet.image,
    tweet.category,
    tweet.created_at,
    user_table.username,
    user_table.userfull,
    user_table.avatar,
    (case when (now() - tweet.created_at > '59 minutes'::interval)
        then to_char(tweet.created_at, 'Month DD')
        else concat(to_char(age(now(), tweet.created_at), 'MI'), ' mins ago')
        end) as time_display,
    (case when exists (select * from likes where tweet_id = tweet.id) then true else false end) as tweet_liked,
    (case when exists (select * from retweet where tweet_id = tweet.id) then true else false end) as retweet,
    (case when exists (select * from retweet where tweet_id = tweet.id) then (select created_at from retweet where tweet_id = tweet.id) else (tweet.created_at) end) as time_display_new
from
    tweet
left outer join
--full outer join
	retweet on tweet.id = retweet.tweet_id
--full outer join
left outer join
    user_table on tweet.user_id = user_table.id
where
    tweet.user_id = 3 or
    tweet.user_id in (
        select user_id from follower where followed_by = 3
    );

------------------------------

select
    tweet.id,
    tweet.content,
    tweet.image,
    tweet.category,
    tweet.created_at,
    (case when (now() - tweet.created_at > '59 minutes'::interval)
        then to_char(tweet.created_at, 'Month DD')
        else concat(to_char(age(now(), tweet.created_at), 'MI'), ' mins ago')
        end) as time_display,
    (case when exists (select * from likes where tweet_id = tweet.id) then true else false end) as tweet_liked,
    user_table.username,
    user_table.userfull,
    user_table.avatar,
    False as retweet
from
    tweet
left outer join
--full outer join
	retweet on tweet.id = retweet.tweet_id
--full outer join
left outer join
    user_table on tweet.user_id = user_table.id
where
    tweet.user_id = 3 or
    tweet.user_id in (
        select user_id from follower where followed_by = 3
    )   
union all
SELECT
    tweet.id,
    tweet.content,
    tweet.image,
    tweet.category,
    rt.created_at,
    (case when (now() - tweet.created_at > '59 minutes'::interval)
        then to_char(tweet.created_at, 'Month DD')
        else concat(to_char(age(now(), tweet.created_at), 'MI'), ' mins ago')
        end) as time_display,
    (case when exists (select * from likes where tweet_id = tweet.id) then true else false end) as tweet_liked,
    user_table.username,
    user_table.userfull,
    user_table.avatar,
    True as retweet

FROM
    tweet
LEFT OUTER JOIN retweet AS rt ON rt.tweet_id = tweet.id
left outer join user_table on tweet.user_id = user_table.id
WHERE
    tweet.id = tweet_id;
    
--(case when exists (select * from retweet where tweet_id = tweet.id) then (select created_at from retweet where tweet_id = tweet.id) else (tweet.created_at) end) as time_display_new

select
                tweet.id,
                tweet.content,
                tweet.image,
                tweet.user_id,
                tweet.created_at,
                (case when (now() - tweet.created_at > '59 minutes'::interval)
                	then to_char(tweet.created_at, 'Month DD')
                	else concat(to_char(age(now(), tweet.created_at), 'MI'), ' mins ago')
                	end) as time_display,
                (case when exists
                    (select * from likes where tweet_id = tweet.id)
                    then true else false end) as liked,
                user_table.username,
                user_table.userfull,
                user_table.avatar,
                False as retweet,
                'none' as retweet_username
            from
                tweet
            inner join
                user_table on tweet.user_id = user_table.id
            union all
            select
                tweet.id,
                tweet.content,
                tweet.image,
                tweet.user_id,
                rt.created_at,
                (case when (now() - tweet.created_at > '59 minutes'::interval)
                    then to_char(tweet.created_at, 'Month DD')
                    else concat(to_char(age(now(), tweet.created_at), 'MI'), ' mins ago')
                    end) as time_display,
                (case when exists (select * from likes where tweet_id = tweet.id) then true else false end) as liked,
                user_table.username,
                user_table.userfull,
                user_table.avatar,
                True as retweet,
                (select username from user_table where id = rt.user_id) as retweet_username
            from
                tweet
            left outer join retweet AS rt ON rt.tweet_id = tweet.id
            left outer join
                user_table on tweet.user_id = user_table.id
            where
                tweet.id = tweet_id
            order by created_at desc;
