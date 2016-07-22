/*

datagen.js: generates random data for my-yelp database defined by the schema in my-yelp.sql.

To generate 100 restaurants:

time node --max-old-space-size=2048 datagen.js restaurant 100 |psql my-yelp

To generate 100 reviewers:

time node --max-old-space-size=2048 datagen.js reviewer 100 |psql my-yelp

To generate 100 reviews, where 200 is the current max ID for restaurants and 300 is the current max ID for reviewers:

time node --max-old-space-size=2048 datagen.js review 10 100 300 |psql my-yelp

*/

var faker = require('faker');

function gen(tableName, times, genRow) {
  var keys;
  for (var i = 0; i < times; i++) {
    var row = genRow();
    if (i === 0) {
      keys = Object.keys(row);
      process.stdout.write('insert into ' + tableName + '(' + keys.join(', ') + ') values\n');
    }
    process.stdout.write('(')

    for (var j = 0; j < keys.length; j++) {
      var value = row[keys[j]];
      if (typeof value === 'string') {
        process.stdout.write("'" + value.replace(/'/g, "''") + "'");
      } else {
        process.stdout.write(String(value));
      }
      if (j < keys.length - 1) {
        process.stdout.write(',')
      }
    }

    process.stdout.write(')');

    if (i < times - 1) {
      process.stdout.write(',\n');
    }
  }
  process.stdout.write(';\n');
}

var table = process.argv[2];
var count = Number(process.argv[3]);

if (table === 'restaurant') {
  gen('restaurant', count, function() {
    return {
      name: faker.company.companyName()
    }
  });
} else if (table === 'reviewer') {
  gen('reviewer', count, function() {
    return {
      name: faker.name.findName(),
      karma: Math.ceil(Math.random() * 7)
    }
  });
} else if (table === 'review') {
  var numRestaurants = Number(process.argv[4]);
  var numReviewers = Number(process.argv[5]);
  gen('review', count, function() {
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.sentences(),
      stars: Math.ceil(Math.random() * 5),
      reviewer_id: Math.ceil(Math.random() * numReviewers),
      restaurant_id: Math.ceil(Math.random() * numRestaurants)
    }
  });
}
