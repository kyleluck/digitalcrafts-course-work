var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Kyle Luck Portfolio'
  });
});

app.get('/about', function(req, res) {
  res.render('about', {
    title: 'About Me'
  });
});

app.get('/projects', function(req, res) {
  res.render('projects', {
    title: 'Projects'
  });
});

app.get('/contact', function(req, res) {
  res.render('form', {
    title: 'Contact Me'
  });
});

app.post('/submit', function(req, res) {
  var requestBody = req.body;
  var name = requestBody.name;
  var message = requestBody.message;
  var saveMessage = "From: " + name + "\n" + "Message: " + message + "\n" + "_____________________" + "\n";

  fs.appendFile('messages.txt', saveMessage, function(err) {
    if (err) {
      return console.log('There was an error: ', err);
    }
  });
  res.render('save-message', {
    title: 'Thanks!'
  });
});

//listen for requests
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
