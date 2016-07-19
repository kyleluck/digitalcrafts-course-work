#query to then display author, review title, full review, stars, restaurant name:
select
  users.name, reviews.title, reviews.review, reviews.stars, restaurants.name
from
  users
inner join
  reviews on users.id = reviews.author
inner join
  restaurants on reviews.restaurant_id = restaurants.id;
