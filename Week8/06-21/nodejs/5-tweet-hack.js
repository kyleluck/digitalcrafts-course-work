var fs = require('fs');
// use Allen's tweethack
var tweethack = require('./tweethack');

// get the 1st command line argument (process.argv[2]) as the filename
var filename = process.argv[2];

// read the contents of the file
fs.readFile(filename, function(err, buffer) {
  // check for error
  if (err) {
    console.error(err.stack);
    return;
  }
  // convert buffer to string
  var stringContent = buffer.toString();
  // apply tweet hack!
  var text = tweethack(stringContent);
  fs.writeFile(filename, text, function(err) {
    // check for error
    if (err) {
      console.error(err.stack);
      return;
    }
    // print message saying the file was overwritten
    console.log('Wrote', filename);
  });
});
