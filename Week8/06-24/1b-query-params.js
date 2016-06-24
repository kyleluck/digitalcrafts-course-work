var express = require('express');
var app = express();

app.get('/', function (request, response) {
  var name = request.query.name;
  response.send('Hello ' + name + '!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
