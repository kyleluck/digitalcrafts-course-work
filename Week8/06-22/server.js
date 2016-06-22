/*
## Make your own HTTP server

Make a server that returns "Hello, world!" to the web browser.
*/
var http = require('http');
const PORT = 3000;

var server = http.createServer(function(request, response) {
  response.write('Hello World!');
  response.end();
});

server.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});
