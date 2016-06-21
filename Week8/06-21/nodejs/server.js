/*
## Make your own HTTP server

Make a server that returns "Hello, world!" to the web browser.
*/
var http = require('http');
const PORT = 3000;

function handleRequest(request, response) {
  response.end('Hello World!!');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});
