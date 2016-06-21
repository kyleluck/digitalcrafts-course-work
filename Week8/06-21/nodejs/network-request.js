/*
get weather and temperature for a city passed in from the CLI
*/

var request = require('request');
var city = process.argv[2];

getWeather(city, function(err, data) {
  if (err) {
    return console.err('Get weather failed: ' + err.message);
  }
  console.log('Weather: ' + data.weather[0].description);
  console.log('Temperature: ' + data.main.temp);
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
      callback(err);
      return;
    }
    try {
      var data = JSON.parse(body);
      callback(null, data);
    } catch (parseError) {
      callback(parseError);
      return;
    }
  });
}
