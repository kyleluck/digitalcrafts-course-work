/*  Use the zipcode model you made earlier. Write a Node program that performs
    an aggregation query to find the top 3 most populated cities and print
    them out to the console.
*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/population');

// Zipcode model
var Zipcode = mongoose.model('Zipcode', {
  _id: { type: String, required: true },
  city: { type: String, required: true },
  loc: [Number],
  pop: { type: Number, required: true },
  state: { type: String, required: true }
});

Zipcode.aggregate(
  [
    { $group: { _id: { city: '$city', state: '$state' }, pop: { $sum: '$pop' } } },
    { $sort: { pop: -1 } },
    { $limit: 3 }
  ],
  function(err, response) {
    if (err) {
      return console.error(err);
    }
    console.log(response);
  }
);
