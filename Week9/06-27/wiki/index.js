var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.set('view engine', 'hbs');
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.redirect('/HomePage');
});

app.get('/:pageName', function(req, res) {
  var pageName = req.params.pageName,
      pageContent,
      pageFileLocation = 'pages/' + pageName + '.txt';

  //just return if the request is for a dumb favicon
  if (pageName === 'favicon.ico') {
    return;
  }

  //check to see if file exists
  fs.access(pageFileLocation, function(err) {
    //if file doesn't exist, render placeholder page
    if (err) {
      res.render('placeholder', {
        title: pageName,
        pageName: pageName,
      });
      return;
    }

    //if file exists, read file contents and render page
    fs.readFile(pageFileLocation, function(err, data) {
      if (err) {
        return console.log('There was an error reading the file: ', err);
      }

      pageContent = data.toString();

      res.render('page', {
        title: pageName,
        pageName: pageName,
        content: pageContent
      });
    });

  });
});

app.get('/:pageName/edit', function(req, res) {
  var pageName = req.params.pageName;
  var pageFileLocation = 'pages/' + pageName + '.txt';
  var currentContent;

  fs.readFile(pageFileLocation, function(err, data) {
    if (err) {
      currentContent = '';
    } else {
      currentContent = data.toString();
    }
    res.render('edit', {
      title: 'Edit ' + pageName,
      pageName: pageName,
      currentContent: currentContent
    });
  });

});

app.post('/:pageName/save', function(req, res) {
  var pageContent = req.body.pageContent;
  var thisPage = req.params.pageName;
  var pageLocation = 'pages/' + thisPage + '.txt';

  fs.writeFile(pageLocation, pageContent, function(err) {
    if (err) {
      return console.log('There was an error: ', err);
    }
    console.log(pageLocation + " written successfully");
  });

  res.redirect('/' + thisPage);
});

app.listen('3000', function() {
  console.log('Listening on port 3000');
});


/*
* / will redirect to /HomePage
* /:pageName will render the contents of the specified pageName, if the page doesn't exist, it will display the place holder page, giving users a link to create that page
* /:pageName/edit will display a form for the user to edit the specified page
* /:pageName/save is the URL where the edit form will send a POST request to save the new version of the page
*/
