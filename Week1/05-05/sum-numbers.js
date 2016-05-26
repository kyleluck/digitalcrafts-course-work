/*

## Sum the Numbers

Given an array of numbers, print their sum. #array #loop #easy
*/

var numbers = [1, 4, 3, 7, 10];
var sum = 0;

numbers.forEach(function(num) {
  sum += num;
});
console.log(sum);
