/*
## Exercise 2

Rewrite the code in wiki.js in promise-based style.
*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wiki');

var Page = mongoose.model('Page', {
  _id: String,
  content: String
});

// BEFORE PROMISES
/*
Page.findById('GeneralAssembly', function(err, page) {
  if (err) {
    console.error(err.message);
    return;
  }
  page.content = 'It is not that great';
  page.save(function(err) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Success!');
  });
});
*/

// AFTER PROMISES
Page.findById('GeneralAssembly')
  .then(function(page) {
    page.content = 'It is not that great';
    return page.save();
  })
  .then(function() {
    console.log('Success!');
  })
  .catch(function(err) {
    console.error(err.message);
  });
