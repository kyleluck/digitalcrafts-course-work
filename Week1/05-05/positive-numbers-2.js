/*
## Positive Numbers II

Given an array of numbers, create a new array which contains every number in the given array which is positive. #array #loop #if #medium
*/

var numbers = [3, -8, -4, 10, 23];
var positiveNumbers = [];

numbers.forEach(function(num) {
  if (num > 0) {
    positiveNumbers.push(num);
  }
});

console.log(positiveNumbers);
