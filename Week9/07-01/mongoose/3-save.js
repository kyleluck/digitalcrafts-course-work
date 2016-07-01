var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/2016-may-cohort');
var Student = require('./student');

var matt = new Student({
  name: 'Matt',
  links: {
    website: 'https://github.com/mbrimmer83/matthewbrimmerwebsite',
    github: 'https://github.com/mbrimmer83'
  },
  gender: 'male',
  points: 12,
  projects: [
    'Sportakus',
    'Draw Together',
    'Tic Tac Toe',
    'Movie App',
    'Black Jack'
  ]
});

matt.save(function(err) {
  if (err) {
    console.error(err.message);
    //console.error(err.errors); //err.errors provides additional details about why the save failed
    return;
  }
  console.log('Saved matt!', matt);
  process.exit();
});

//saving again would update, not create a duplicate
