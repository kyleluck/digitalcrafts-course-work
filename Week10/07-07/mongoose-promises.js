/*
## Exercise 1

Write a Node script that uses Mongoose's promise support to find a user from the database.
*/

var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/bookmarks');

var Bookmark = mongoose.model('Bookmark', {
  title: { type: String, required: true },
  link: { type: String, required: true }
});


Bookmark.findOne({ title: "Reddit" })
  .then(function(bookmark) {
    console.log(bookmark);
  })
  .catch(function(err) {
    console.error(err);
  });
