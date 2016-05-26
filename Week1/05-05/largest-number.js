/*
## Largest Number

Given an array of numbers, print the largest of the numbers. #array #loop #if #easy
*/

var numbers = [1, 4, 3, 7, 10];
var prev = 0;
var largest = 0;
numbers.forEach(function(num) {
  if (num > largest) {
    largest = num;
  }
});

/*
//with a for loop
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
}
*/

/*
//with while loop
var i = 0;
while (i < numbers.length) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
  i++;
}
*/

console.log(largest);
