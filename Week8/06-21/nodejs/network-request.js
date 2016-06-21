/*
## Making a network request

Write a program that takes in an URL from the command line, makes a request to it, and prints the response to the terminal. You will use the request module to do it: https://www.npmjs.com/package/request

Example output:

$ node request.js http://hellohappy.org
...lots of HTML output...
*/
var request = require('request');
var url = process.argv[2];
request(url, function(err, response, body) {
  console.log(body);
});
