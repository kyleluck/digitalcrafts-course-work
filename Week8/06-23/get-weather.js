var request = require('request');

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
    try {
      // convert the body in JSON format to a JS object
      var data = JSON.parse(body);
      if (Number(data.cod) >= 400) {
        callback(new Error(data.message));
        return;
      }
      // call the callback, passing null for err to signal success
      callback(null, data);
    } catch(e) {
      callback(e);
      return;
    }
  });
}

getWeather('Atlanta, GA', function(err, data) {
  if (err) {
    //handle error
  } else {
    //continue on your merry way
    console.log(data.name + " " + data.weather[0].description + " " + data.main.temp);
  }
});
