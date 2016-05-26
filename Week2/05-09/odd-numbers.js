/*
## Odd Numbers

Write a function that takes an array of numbers as the argument and returns an array containing each odd number in the given array. #easy
*/

function oddNumbers(arr) {
  var oddArr = [];
  arr.forEach(function(val) {
    if (val % 2 !== 0) {
      oddArr.push(val);
    }
  });
  return oddArr;
}

var numbers = [1, 2, 3, 4, 5, 6];
var oddNums = oddNumbers(numbers);

console.log(oddNums);
