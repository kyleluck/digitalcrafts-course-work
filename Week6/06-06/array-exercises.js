/*
## Positive Numbers

Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
*/

var nums = [-1, 3, 6, -10, 23];
var posNums = nums.filter(function(n) {
  return n > 0;
});
console.log(posNums);

/*
## Square the Numbers

Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: `squareTheNumbers([1, 2, 3])` should give `[1, 4, 9]`.
*/

var squaredNums = nums.map(function(n) {
  return n * n;
});
console.log(squaredNums);

/*
## Good Job!

Given an array of people's names:

Print out 'Good Job, {{name}}!' for each person's name, one on a line. Hint: You can use "\n" as the newline character and array's `join()` method to put together an array of strings.
*/
var people = [
  'Sandhya',
  'Dave',
  'Carolyn',
  'DeeAnn',
  'Allen',
  'Anthony',
  'Kyle',
  'Shanda',
  'Cody',
  'Tim',
  'Regan',
  'Matt',
  'Andrew'
];
people.forEach(function(val) {
  console.log('Good Job, ' + val + "!");
});

/*
## All A names

Write a function that takes the array of the student names from the last problem and returns only an array of the students whose names start with an "A".
*/
var peopleStartA = people.filter(function(n) {
  return n[0] === 'A';
});
console.log(peopleStartA);

/*
## Costs

Given an array of catalog items:


1. Write a function that takes the array and returns a new array containing the individual prices of each item. With the above array you should get [15.99, 8.99, 2.99, 3.99]
2. Write a function that takes the array and returns only the items with a price over 10 dollars.
3. Write a function that takes the array and returns a new array containing the total cost of each item by multiplying the item price by the quantity. For example, the above array should yield: [31.98, 8.99, 2.99, 39.9]
*/
var items = [
  { name: 'Basketball', price: 15.99, quantity: 2 },
  { name: 'Pump', price: 8.99, quantity: 1 },
  { name: 'Whistle', price: 2.99, quantity: 1 },
  { name: 'Cones', price: 3.99, quantity: 10 },
];
var prices = items.map(function(n) {
  return n.price;
});
console.log(prices);

var over10 = items.filter(function(n) {
  return n.price > 10;
});
console.log(over10);

var totalCost = items.map(function(n) {
  return (n.price * n.quantity).toFixed(2);
});
console.log(totalCost);

/*
## Sum the array

Write a function that takes an array of numbers and returns the sum of the numbers.
*/
var nums = [-1, 3, 6, -10, 23];
var sum = nums.reduce(function(sum, element) {
  return sum += element;
}, 0);
console.log(sum);

/*
## Get the largest number

Write a function that takes an array of numbers and returns the largest number in the array. You may assume all numbers are positive.
*/
var nums = [1, 3, 6, 10, 2];
var max = nums.reduce(function(highest, element) {
  return element > highest ? element : highest;
}, 0);
console.log(max); //expect 10

/*
## Total Cost

Take an array of catalog items as in the "Costs" problem. Calculate the total cost of all the items by multiplying each item's price and quantity and the summing the results.
*/
var items = [
  { name: 'Basketball', price: 15.99, quantity: 2 },
  { name: 'Pump', price: 8.99, quantity: 1 },
  { name: 'Whistle', price: 2.99, quantity: 1 },
  { name: 'Cones', price: 3.99, quantity: 10 },
];
var totalCost = items.map(function(n) {
  return n.price * n.quantity;
}).reduce(function(cost, element) {
  return cost + element;
},0);
console.log(totalCost.toFixed(2));

/*
## Sum array of arrays

Write a function that takes an array of arrays of numbers

and returns the sum of all the numbers within them.
*/

var arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7]
];
var sum = arr.map(function(n) {
  var sumInner = n.reduce(function(sum, element) {
    return sum + element;
  }, 0);
  return sumInner;
}).reduce(function(sum, element) {
  return sum + element;
});
console.log(sum); //expect 28

/*
## Is all positive?

Write a function which, given an array of numbers, returns true if all the numbers in the array are positive, and returns false otherwise. Implement this function in 2 different ways: first using .every() and then using .some()
*/
var nums = [1, -7, 4, -3, 10]; //for false test
var nums = [1, 7, 4, 3, 10]; //for true test

function isPositive(element, index, array) {
  return element >= 0;
}
console.log(nums.every(isPositive));
console.log(nums.some(isPositive));
