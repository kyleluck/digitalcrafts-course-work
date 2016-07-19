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
