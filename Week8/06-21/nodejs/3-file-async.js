var fs = require('fs');

// read the file asynchronously
// the callback takes 2 parameters:
// * a potential err object - in the absence of any errors, err will be null
// * a buffer object - this contains the data of the read file
fs.readFile('a-file.txt', function(err, buffer) {
  // check for error
  if (err) {
    // print the error stacktrace
    console.error('Stack:', err.stack);
    return;
  }

  // print the buffer
  console.log('Buffer:', buffer);

  // convert buffer to text content
  var stringContent = buffer.toString();
  // print the text content
  console.log('String content:', stringContent);
});

console.log('This happened before the data was ready.');
