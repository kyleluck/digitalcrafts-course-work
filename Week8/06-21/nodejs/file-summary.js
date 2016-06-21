const fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, 'utf8', function(err, data) {
  if (err) {
    return console.log('There was an error: ' + err);
  }
  var fileLinesInArray = data.split('\n');
  var numberOfLines = fileLinesInArray.length - 1;
  console.log(numberOfLines + " lines.");
  var characters = data.split('');
  var numberOfCharacters = characters.length;
  console.log(numberOfCharacters + " characters.");
});
