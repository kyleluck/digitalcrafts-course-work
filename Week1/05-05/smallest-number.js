/*

## Smallest Number

Given an array of numbers, print the smallest of the numbers. #array #loop #if #easy

*/

var numbers = [12, 4, 3, 7, 10];
var smallest = 1000;

numbers.forEach(function(num) {
  if (num < smallest) {
    smallest = num;
  }
});

console.log(smallest);
