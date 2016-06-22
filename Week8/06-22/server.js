/*
## Make your own HTTP server

Make a server that returns "Hello, world!" to the web browser.
*/
var http = require('http');
var request = require('request');

const PORT = 3000;

function getHTML(data) {
  var html = `
  <html>
    <head>
      <title>${data.name}</title>
    </head>
    <body>
      <h1 id='title'>${data.name}</h1>
      <h5>Node is freaking awesome</h5>
      <p>
        Temperature: ${data.main.temp}<br>
        Weather: ${data.weather[0].description}
      </p>
    </body>
  </html>`;
  return html;
}



var server = http.createServer(function(request, response) {
  var url = request.url;
  var city = url.substring(1);
  getWeather(city, function(err, data) {
    var html = getHTML(data);
    response.write(html);
    response.end();
  });
});

server.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});

function getWeather(city, callback) {
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: city,
      units: 'imperial',
      APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
    }
  }, function(err, response, body) {
    if (err) {
      // call the callback
      callback(err);
      return;
    }
    // convert the body in JSON format to a JS object
    var data = JSON.parse(body);
    // call the callback, passing null for err to signal success
    callback(null, data);
  });
}
