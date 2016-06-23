app.factory('weatherService', function($http) {
  var APPID = 'd572e3897b56c1638fada0388125c161';
  return {
    getWeatherByCityIds: function(cityIds, callback) {
      $http({
        url: 'http://api.openweathermap.org/data/2.5/group',
        params: {
          id: cityIds.join(','),
          units: 'imperial',
          APPID: APPID
        }
      }).success(function(data) {
        callback(data);
      });
    },
    getForecastForCity: function(cityId, callback) {
      $http({
        url: 'http://api.openweathermap.org/data/2.5/forecast',
        params: {
          id: cityId,
          units: 'imperial',
          APPID: APPID
        }
      }).success(callback);
    }
  };
});
