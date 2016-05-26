/*
## Positive Numbers

Write a function that takes an array of numbers as the argument and returns an array containing each positive number in the given array. #easy
*/

function positiveNumbers(arr) {
  var positiveArr = [];
  arr.forEach(function(val) {
    if (val > 0) {
      positiveArr.push(val);
    }
  });
  return positiveArr;
}

var allNumbers = [-3, -2, -1, 0, 1, 2, 3, 4];
console.log(positiveNumbers(allNumbers));
