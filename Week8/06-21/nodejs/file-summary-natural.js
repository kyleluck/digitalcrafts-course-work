const fs = require('fs');
const natural = require('natural');

var fileName = process.argv[2];
fs.readFile(fileName, 'utf8', function(err, data) {
  if (err) {
    return console.log('There was an error: ' + err);
  }

  // find and print number of lines
  var fileLinesInArray = data.split('\n');
  var numberOfLines = fileLinesInArray.length - 1;
  console.log(numberOfLines + " lines.");

  // find and print number of characters
  var characters = data.split('');
  var numberOfCharacters = characters.length;
  console.log(numberOfCharacters + " characters.");

  // find and print number of words using natural package
  var tokenizer = new natural.WordTokenizer();
  var wordsArray = tokenizer.tokenize(data);
  var numberOfWords = wordsArray.length;
  console.log(numberOfWords + " words");
});
