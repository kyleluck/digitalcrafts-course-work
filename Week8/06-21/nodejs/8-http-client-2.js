var request = require('request');

// make a request to the weather API
request({
  url: 'http://api.openweathermap.org/data/2.5/weather',
  // with these query parameters
  qs: {
    q: 'Atlanta, GA',
    units: 'imperial',
    APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
  }
}, function(err, response, body) {
  // check for error
  if (err) {
    console.error(err.stack);
  }
  // print the results
  console.log(body);
});
