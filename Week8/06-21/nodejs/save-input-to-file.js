const fs = require('fs');
var input = process.argv[2];

fs.writeFile('data.txt', input, function(err) {
  if (err) {
    return console.log('There was an error saving the file: ' + err);
  }
  console.log('The file was saved successfully!');
});
