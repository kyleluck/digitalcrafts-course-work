/*
## Multiply an Array

Given an array of numbers, and a single factor (also a number), create a new array consisting of each of the numbers in the first array multiplied by the factor. Print this array using `console.log(array);` #array #loop #easy #math #medium
*/

var numbers = [0, 3, 5, 9, 10];
var factor = 3;
var multiplied = [];

numbers.forEach(function(num) {
  multiplied.push(num * factor);
});

console.log(multiplied);
