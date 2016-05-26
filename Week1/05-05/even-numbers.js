/*
## Even Numbers

Given an array of numbers, print each number in the array that is even. #array #loop #if #easy
*/

var numbers = [3, 6, 8, 10, 15, 20];

numbers.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

//or with a for loop
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }
