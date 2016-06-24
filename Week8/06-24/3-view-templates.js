var express = require('express');
var app = express();
app.set('view engine', 'hbs');

app.get('/', function (request, response) {
  /* request.query for query params (after ?)
    request.params for /:example params
  */
  var name = request.query.name;
  response.render('hello', {
    title: 'Hello',
    name: name
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
