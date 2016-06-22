/*
## Make your own HTTP server

Make a server that returns "Hello, world!" to the web browser.
*/
var http = require('http');
var url = require('url');

const PORT = 3000;

var title = 'Node Says Hello';
var html = `
<html>
  <head>
    <title>${title}</title>
    <script src='script.js'></script>
    <link rel='stylesheet' href='style.css'>
  </head>
  <body>
    <h1>Hello Kyle. ${title}</h1>
    <h5>Node is freaking awesome</h5>
  </body>
</html>`;

var css = `
body {
  background: yellow;
}`;

var js = `
alert('Hahahahaha');
`;

var server = http.createServer(function(request, response) {
  var url = request.url;
  if (url === '/') {
    response.write(html);
  } else if (url === '/script.js') {
    response.write(js);
  } else if (url === '/style.css') {
    response.write(css);
  }
  
  //var queryObject = url.parse(request.url, true).query;
  //console.log(queryObject);

  response.end();
});

server.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});
