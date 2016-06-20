// AFTER
function main() {
  var mapElm = document.getElementById('map');
  var map = new google.maps.Map(mapElm, {
    center: {lat: 33.748995, lng: -84.387982},
    zoom: 4
  });
  var geocoder = new google.maps.Geocoder();
  getCityData(function(cities) {
    cities.forEach(function(city) {
      geocoder.geocode({ address: city.name }, function(data) {
        var latLng = data[0].geometry.location;
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        showMarker(marker, city);
      });
    });
  });
}

function showMarker(marker, city) {
  marker.addListener('click', function () {
    getCityWeather(city, function(data) {
      var content = '<h1>' + data.name + '</h1>' +
        'Temperature: ' + data.main.temp + '°<br>' +
        'Hi: ' + data.main.temp_max + '°<br>' +
        'Lo: ' + data.main.temp_min + '°<br>' +
        data.weather[0].description + '<br>' +
        '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
      var infoWindow = new google.maps.InfoWindow({
        content: content
      });
      infoWindow.open(map, marker);
    });
  });
}

function getCityWeather(city, callback) {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    method: 'GET',
    data: {
      q: city.name,
      units: 'imperial',
      APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
    },
    success: function(data) {
      callback(data);
    }
  });
}

function getCityData(callback) {
  $.ajax({
    url: 'cities.json',
    success: function(cities) {
      callback(cities);
    }
  });
}

main();


/* BEFORE
function main() {
  var mapElm = document.getElementById('map');
  var map = new google.maps.Map(mapElm, {
    center: {lat: 33.748995, lng: -84.387982},
    zoom: 4
  });
  var geocoder = new google.maps.Geocoder();

  $.ajax({
    url: 'cities.json',
    success: function(cities) {
      cities.forEach(function(city) {
        geocoder.geocode({ address: city.name }, function(data) {
          var latLng = data[0].geometry.location;
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
          marker.addListener('click', function() {
            $.ajax({
              url: 'http://api.openweathermap.org/data/2.5/weather',
              method: 'GET',
              data: {
                q: city.name,
                units: 'imperial',
                APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
              },
              success: function(data) {
                var content = '<h1>' + data.name + '</h1>' +
                  'Temperature: ' + data.main.temp + '°<br>' +
                  'Hi: ' + data.main.temp_max + '°<br>' +
                  'Lo: ' + data.main.temp_min + '°<br>' +
                  data.weather[0].description + '<br>' +
                  '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
                var infoWindow = new google.maps.InfoWindow({
                  content: content
                });
                infoWindow.open(map, marker);
              }
            });
          });
        });
      });
    }
  });
}
*/
