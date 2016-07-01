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

var myZip = new Zipcode({
  _id: '30338',
  city: 'Atlanta',
  loc: [1, 2],
  pop: 20000,
  state: 'GA'
});
