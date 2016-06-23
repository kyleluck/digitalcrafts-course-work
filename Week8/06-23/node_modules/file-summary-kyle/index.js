const fs = require('fs');

module.exports = function(fileName, callback) {
  fs.readFile(fileName, 'utf8', function(err, data) {
    if (err) {
      callback('Error: ' + err);
    }

    // find and print number of lines
    var fileLinesInArray = data.split('\n');
    var numberOfLines = fileLinesInArray.length - 1;

    // find and print number of characters
    var characters = data.split('');
    var numberOfCharacters = characters.length;

    var summary = {
      lineCount: numberOfLines,
      charCount: numberOfCharacters
    };

    callback(null, summary);
  });
};
