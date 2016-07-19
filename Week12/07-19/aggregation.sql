
select count(*) from restaurants;

CREATE TABLE restaurant (
  id serial PRIMARY KEY,
  name varchar NOT NULL,
  address varchar,
  category varchar
);

CREATE TABLE user_table (
  id serial PRIMARY KEY,
  name varchar NOT NULL
);

CREATE TABLE review (
  id serial PRIMARY KEY,
  author_id integer REFERENCES user_table (id),
  restaurant_id integer REFERENCES restaurant (id),
  title varchar NOT NULL,
  stars integer,
  content varchar
);

insert into restaurant values (default, 'NaanStop', '273 blah st', 'India');
insert into restaurant values (default, 'Chipotle', '273 blah st', 'Mexican');

insert into user_table values (default, 'Toby');
insert into user_table values (default, 'Dave');



select
  user_table.name as user,
  restaurant.name as restaurant,
  review.title,
  review.content as review
from
  user_table,
  restaurant,
  review
where
  review.author_id = user_table.id and
  review.restaurant_id = restaurant.id;




-- MongoDB schema
/*
var Restaurant = mongoose.model('Restaurant', {
  name: String,
  address: String,
  reviews: [{
    title: String,
    review: String,
    stars: Number,
    author: {
      name: String,
      karma: Number,
      email: String
    }
  }]
});
*/

-- AGGREGATION
/*
  * count
  * sum
  * avg
  * max
  * min
*/

-- count
select
  reviews.author,
  users.name,
  count(reviews.review)
from
  users,
  restaurants,
  reviews
where
  reviews.author = users.id and
  reviews.restaurant_id = restaurants.id
group by
  reviews.author,
  users.name;

-- avg
select
  restaurants.name,
  avg(reviews.stars) as average_stars,
  max(reviews.stars) as max_stars,
  min(reviews.stars) as min_stars
from
  users,
  restaurants,
  reviews
where
  reviews.author = users.id and
  reviews.restaurant_id = restaurants.id
group by
  restaurants.id;
