var request = require('request');

// extract my own asynchronous function
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

var atlantaWeather;
var dallasWeather;

getWeather('Atlanta, GA', function(err, data) {
  if (err) {
    console.error(err.message);
    return;
  }
  atlantaWeather = data;
  if (dallasWeather) {
    compare();
  }
});

getWeather('Dallas, TX', function(err, data) {
  if (err) {
    console.error(err.message);
    return;
  }
  dallasWeather = data;
  if (atlantaWeather) {
    compare();
  }
});

function compare() {
  var difference = atlantaWeather.main.temp - dallasWeather.main.temp;
  if (difference > 0) {
    console.log('Atlanta is hotter than Dallas by ' + difference.toFixed(0) + '°');
  } else {
    console.log('Atlanta is cooler than Dallas by ' + (-difference).toFixed(0) + '°');
  }
}
