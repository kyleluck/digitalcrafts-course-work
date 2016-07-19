-- query to  display author, review title, full review, stars, restaurant name:

select
  users.name as author,
  reviews.title as title,
  reviews.review as review,
  reviews.stars as stars,
  restaurants.name as restaurant
from
  users
inner join
  reviews on users.id = reviews.author
inner join
  restaurants on reviews.restaurant_id = restaurants.id;

-- OR

select
  users.name as author,
  reviews.title as title,
  reviews.review as review,
  reviews.stars as stars,
  restaurants.name as restaurant
from
  users, reviews, restaurants
where
  users.id = reviews.author and
  reviews.restaurant_id = restaurants.id;

--///////////--///////////--///////////--///////////--///////////--///////////
--///////////--///////////--///////////--///////////--///////////--///////////
--///////////--///////////--///////////--///////////--///////////--///////////




--///////////--///////////--///////////--///////////--///////////--///////////
-- average stars by restaurant (restaurant name, average star rating)
--///////////--///////////--///////////--///////////--///////////--///////////
select
  restaurants.name,
  avg(reviews.stars) as average_stars
from
  users,
  restaurants,
  reviews
where
  reviews.author = users.id and
  reviews.restaurant_id = restaurants.id
group by
  restaurants.id;

--///////////--///////////--///////////--///////////--///////////--///////////
-- average stars by user (user name, average star rating)
--///////////--///////////--///////////--///////////--///////////--///////////
select
  users.name,
  avg(reviews.stars) as average_stars
from
  users,
  restaurants,
  reviews
where
  reviews.author = users.id and
  reviews.restaurant_id = restaurants.id
group by
  users.id;

--///////////--///////////--///////////--///////////--///////////--///////////
-- lowest star rating for each user (user name, lowest star rating)
--///////////--///////////--///////////--///////////--///////////--///////////
select
  users.name,
  min(reviews.stars) as lowest_rating
from
  users,
  restaurants,
  reviews
where
  reviews.author = users.id and
  reviews.restaurant_id = restaurants.id
group by
  users.id;

--///////////--///////////--///////////--///////////--///////////--///////////
-- number of reviews for a restaurant (restaurant name, review count)
--///////////--///////////--///////////--///////////--///////////--///////////
select
  restaurants.name,
  count(reviews.review) as review_count
from
  users,
  restaurants,
  reviews
where
  reviews.author = users.id and
  reviews.restaurant_id = restaurants.id
group by
  restaurants.id;

--///////////--///////////--///////////--///////////--///////////--///////////
-- number of 5 star reviews for a restaurant (name, 5-star count)
--///////////--///////////--///////////--///////////--///////////--///////////
select
  restaurants.name,
  count(reviews.review) as five_star_count
from
  users,
  restaurants,
  reviews
where
  reviews.author = users.id and
  reviews.restaurant_id = restaurants.id and
  reviews.stars = 5
group by
  restaurants.id;

--///////////--///////////--///////////--///////////--///////////--///////////
-- avg star rating in each category (category, num)
--///////////--///////////--///////////--///////////--///////////--///////////
select
  restaurants.category,
  avg(reviews.stars) as avg_rating
from
  users,
  restaurants,
  reviews
where
  reviews.author = users.id and
  reviews.restaurant_id = restaurants.id
group by
  restaurants.category;
