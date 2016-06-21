/*
This is an example of how to make an HTTP request using the request module.

To install the request module:

npm install request
*/

// require the request module
var request = require('request');

/*
request for the HTML for the home page of hellohappy.org
the callback takes 3 parameters:

* err - a potential error, will be null if no error is present
* response - the HTTP response object, contains, headers, status codes, and the response body
* body - the response body, for convinience
*/
request('http://hellohappy.org', function(err, response, body) {
  if (err) {
    console.error(err.stack);
    return;
  }
  // print the contents of the response
  console.log(body);
});
