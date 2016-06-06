/*
## Positive Numbers

Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
*/

var nums = [-1, 3, 6, -10, 23];
var posNums = nums.filter(function(n) {
  return n > 0;
});
console.log(posNums);
