# Restaurant DB V2

## Table

For version 2 of the restaurant database, you will have the following tables:

* restaurant
* user
* review

I user could write any number of reviews for any number of restaurants. The restaurant table has these columns:

* id
* name
* address
* category

The user table would have these columns:

* id
* name
* email
* karma - between 0 to 7 (please use a constraint)

The review table would have these columns:

* id
* author user id (please use a constraint)
* stars - 1 to 5 stars (please use a constraint)
* title
* review - the text of the review
* restaurant id (please use a constraint)

Create these table schemas and then fill in data for restaurants, users and reviews.

query to then display author, review title, full review, stars, restaurant name:
select
  users.name, reviews.title, reviews.review, reviews.stars, restaurants.name
from
  users
inner join
  reviews on users.id = reviews.author
inner join
  restaurants on reviews.restaurant_id = restaurants.id;
