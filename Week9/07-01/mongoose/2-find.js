







var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/2016-may-cohort');











var Student = require('./student');

Student.find(function(err, students) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Found students:', students);
});











Student.find({ gender: 'female' }, function(err, females) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Found female students:', females);
});











Student.findOne({ name: 'Tim' }, function(err, matt) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Found Tim:', matt);
});













Student.findById('57764e7823858fb580a5e1bd', function(err, student) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Found sttudent by ID:', student);
});
