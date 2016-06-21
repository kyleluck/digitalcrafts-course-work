var fs = require('fs');
var contents = 'Here is some text to be saved.';
var filename = '4-saved.txt';

// write the contents to the file asynchonously
fs.writeFile(filename, contents, function(err) {
  // check for error
  if (err) {
    // print the stacktrace
    console.error(err.stack);
    // return to stop going any further
    return;
  }
  console.log('Wrote ' + filename);
});
