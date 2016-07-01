var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zipcodes');
var Student = require('./student');
var ZipCode = require('./zipcode');

// count students by gender
Student.aggregate(
  { $group: { _id: '$gender', count: { $sum: 1 } } },
  function(err, result) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Counts by gender:', result);

    // calculate average city population by state
    ZipCode.aggregate(
      [ // Array is optional here
        { $group: { _id: { city: '$city', state: '$state' }, pop: { $sum: '$pop' } } },
        { $group: { _id: '$_id.state', pop: {$sum: '$pop'}, cityCount: {$sum: 1}, average: {$avg: '$pop'} } }
      ],
      function(err, results) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('Average city population by state:', results);
    });


  }
);
