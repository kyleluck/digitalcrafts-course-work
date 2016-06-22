/*

## Get Weather

Given an array of cities:

var cities = [
  'Atlanta, GA',
  'Pheonix, AZ',
  'Dallas, TX',
  'Philadelphia, PA'
];

Use Open Weather Map API to get their weather and print out their current temperature.

1. Do this in parallel
2. Do this serially
*/

var async = require('async');
var request = require('request');
var getWeather = require('./get-weather-module');

var cities = [
  'Atlanta, GA',
  'Pheonix, AZ',
  'Dallas, TX',
  'Philadelphia, PA'
];

// in parallel
async.map(cities, getWeather, function(err, results) {

  //print temp for each city
  results.map(function(result) {
    console.log('Temperature for ' + result.name + ' is: ' + result.main.temp);
  });

  //calculate average temp
  var temps = results.map(function(result) {
    return Number(result.main.temp);
  });
  var sum = temps.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log('Average temperature is: ' + sum / temps.length);

  var maxTemp = Math.max.apply(Math, temps);
  console.log('Max Temp is: ' + maxTemp);
});

// serially
