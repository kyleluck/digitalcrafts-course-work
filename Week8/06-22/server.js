var http = require('http');
var request = require('request');

//what port we want our server to listen on
const PORT = 3000;

//return HTML data dynamically based on getWeather response
function getHTML(data) {
  var html = `
  <html>
    <head>
      <title>${data.name}</title>
    </head>
    <body>
      <h1 id='title'>${data.name}</h1>
      <p>
        Temperature: ${data.main.temp}<br>
        Weather: ${data.weather[0].description}
      </p>
    </body>
  </html>`;
  return html;
}

//create http server, call getWeather for city in URL
var server = http.createServer(function(request, response) {
  var url = request.url;
  var city = url.substring(1);
  getWeather(city, function(err, data) {
    var html = getHTML(data);
    response.write(html);
    response.end();
  });
});

//listen on PORT
server.listen(PORT, function() {
  console.log("Server is listening on http://localhost:" + PORT);
});

//function to get weather for a specific city
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
