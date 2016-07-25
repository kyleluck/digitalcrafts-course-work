var express = require('express');
var pg = require('pg');

var client = new pg.Client('postgres://localhost:5432/github');
client.connect();

app = express();

app.get('/', function(request, response) {
  client.query('select * from project limit 10', function(err, data) {
    if (err) {
      console.error(err.message);
    }
    var html = '<ul>';
    data.rows.forEach(function(row) {
      html += '<li>' + row.name + '</li>';
    });
    html += '</ul>';
    response.send(html);
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000.');
});
