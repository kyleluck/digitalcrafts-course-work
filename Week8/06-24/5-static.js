var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  var name = req.query.name;
  res.render('hello', {
    title: 'Using Express...',
    content: 'Hello, world!',
    name: name
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
