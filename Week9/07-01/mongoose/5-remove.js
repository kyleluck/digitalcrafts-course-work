var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/2016-may-cohort');
var Student = require('./student');

Student.remove(
  { name: 'Matt' },        // selector
  function(err, reply) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Remove succeeded', reply.result);
    process.exit();
  }
)
