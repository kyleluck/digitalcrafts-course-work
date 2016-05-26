/*
## Sum an Array

Write a function that takes an array of numbers and returns the sum of the numbers. #easy
*/

function sumNumbers(arr) {
  var sum = 0;
  arr.forEach(function(val) {
    sum += val;
  });
  return sum;
}

var numbers = [1, 3, 6, 7, 8];
console.log(sumNumbers(numbers)); //expect 25
