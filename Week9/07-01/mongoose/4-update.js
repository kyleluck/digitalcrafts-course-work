var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/2016-may-cohort');
var Student = require('./student');










// Update by selector
Student.update(
  { name: 'Matt' },        // selector
  { $set: { points: 13 } }, // only update his points
  function(err, reply) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Updated succeeded', reply);
  }
);












// Upsert
Student.update(
  { name: 'Regan' },
  { $set: { gender: 'male', points: 13 } },
  { upsert: true },
  function(err, reply) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Upsert succeeded.', reply);
  }
)














// Convinience method for update by _id
Student.findByIdAndUpdate(
  '57764e9623858fb580a5e1bf',
  { $set: { points: 3 } },
  function(err, reply) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Updated succeeded', reply);
  }
)
