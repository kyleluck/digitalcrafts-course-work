var app = angular.module('my-app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/page-1', {
      templateUrl: 'page-1.html'
    })
    .when('/page-2', {
      templateUrl: 'page-2.html'
    })
    .when('/page-3', {
      templateUrl: 'page-3.html'
    })
    .when('/page-4', {
      templateUrl: 'page-4.html'
    })
    .otherwise({
      redirectTo: '/page-1'
    });
});
