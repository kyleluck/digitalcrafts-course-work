var mongoose = require('mongoose');

// example from http://mongoosejs.com/docs/guide.html
var blogSchema = new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var Blog = mongoose.model('Blog', blogSchema);













// or equivalently:

var Blog = mongoose.model('Blog', {
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});














/*

The permitted SchemaTypes are

* String
* Number
* Date
* Boolean
* Array
* Buffer - binary data
* Mixed - anything you want
* ObjectId - MongoDB object ID

*/













var Student = mongoose.model('Student', {
  name: String,
  links: {
    website: String,
    github: String
  },
  gender: String,
  points: Number,
  projects: [String]
});

















// Schema Validation

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






//FIN
