# Functional Programming Style Array Exercises

Implement all following problems without writing a single loop.

## Positive Numbers

Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

## Square the Numbers

Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: `squareTheNumbers([1, 2, 3])` should give `[1, 4, 9]`.

## Good Job!

Given an array of people's names:

```
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
```

Print out 'Good Job, {{name}}!' for each person's name, one on a line. Hint: You can use "\n" as the newline character and array's `join()` method to put together an array of strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

## All A names

Write a function that takes the array of the student names from the last problem and returns only an array of the students whose names start with an "A".

## Costs

Given an array of catalog items:

var items = [
  { name: 'Basketball', price: 15.99, quantity: 2 },
  { name: 'Pump', price: 8.99, quantity: 1 },
  { name: 'Whistle', price: 2.99, quantity: 1 },
  { name: 'Cones', price: 3.99, quantity: 10 },
];

1. Write a function that takes the array and returns a new array containing the individual prices of each item. With the above array you should get [15.99, 8.99, 2.99, 3.99]
2. Write a function that task the array and returns only the items with a price over 10 dollars.
3. Write a function that takes the array and returns a new array containing the total cost of each item by multiplying the item price by the quantity. For example, the above array should yield: [31.98, 8.99, 2.99, 39.9]

## Sum the array

Write a function that takes an array of numbers and returns the sum of the numbers.

## Get the largest number

Write a function that takes an array of numbers and returns the largest number in the array. You may assume all numbers are positive.

## Total Cost

Take an array of catalog items as in the "Costs" problem. Calculate the total cost of all the items by multiplying each item's price and quantity and the summing the results.

## Sum array of arrays

Write a function that takes an array of arrays of numbers - such as

var arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7]
];

and returns the sum of all the numbers within them.

## Is all positive?

Write a function which, given an array of numbers, returns true if all the numbers in the array are positive, and returns false otherwise. Implement this function in 2 different ways: first using .every() and then using .some()
