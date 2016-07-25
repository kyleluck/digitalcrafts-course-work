import pg

# Connect to the PostgreSQL database
db = pg.DB(dbname='myyelp')

# Make a query
query = db.query('''
    select
        reviewer.name, avg(reviewer.karma)
    from
      reviewer
    inner join
      review on reviewer.id = review.reviewer_id
    inner join
      restaurant on review.restaurant_id = restaurant.id
    where
      restaurant.name = 'Mayert LLC'
    group by
      reviewer.name;
  ''')

print query
