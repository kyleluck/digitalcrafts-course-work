/*
Rewrite this code is promise-based style.
Hint: replace the fs module with fs-promise
*/

var fs = require('fs-promise');
var marked = require('marked');

// BEFORE
/*
fs.readFile('README.md', function(err, buffer) {
  if (err) {
    console.error(err.message);
    return;
  }
  var contents = buffer.toString();
  var html = marked(contents);
  fs.writeFile('README.html', html, function(err) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Wrote README.html');
  });
});
*/


// AFTER
fs.readFile('README.md')
  .then(function(buffer) {
    var contents = buffer.toString();
    var html = marked(contents);
    return fs.writeFile('README.html', html);
  })
  .then(function(){
    console.log('Wrote README.html');
  })
  .catch(function(err) {
    console.error(err.message);
  });
