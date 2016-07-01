var mongoose = require('mongoose');

var Student = mongoose.model('Student', {
  name: { type: String, required: true },
  links: {
    website: String,
    github: String
  },
  gender: { type: String, enum: ['female', 'male'], required: true },
  points: { type: Number, min: 0, max: 100 },
  projects: [String]
});

module.exports = Student;
