/*
## Save request to a file

Extend the previous program to save the body of the response to a file. The name of the file will be taken in as the second command line argument. Example output:

$ node request.js http://hellohappy.org hellohappy.html

Now the file hellohappy.html should contain the HTML content of hellohappy.org.
*/
var request = require('request');
var fs = require('fs');

var url = process.argv[2];
var fileName = process.argv[3];

request(url, function(err, response, body) {
  fs.writeFile(fileName, body, function(err) {
    if (err) {
      return console.error('There was an error: ', err);
    }
    console.log('The file was saved!');
  });
});
