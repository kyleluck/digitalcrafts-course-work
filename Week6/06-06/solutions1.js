var numbers = [-2, 4, -6, 7, -2, -3];

// takes in an array of numbers
// returns an array of only the positive numbers
function positive(numbers) {
  return numbers.filter(function(n) {
    return n > 0;
  });
}

var positives = positive(numbers);

// function that takes an array of numbers
// and returns a new array with each of the numbers squared
function squareArray(numbers) {
  return numbers.map(function(element) {
    return element * element;
  });
}

var squared = squareArray(numbers);

// array of the students names
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

// convert the names to sentences saying Good Job to them
var sentences = people.map(function(person) {
  return 'Good job, ' + person;
});

// join the sentences with newline characters
var result = sentences.join('\n');
console.log(result);

// function that returns true if and only if str starts with an "A"
function startWithAnA(str) {
  if (str.charAt(0) === 'A') {
    return true;
  } else {
    return false;
  }
  // is equivalent to
  // return str.charAt(0) === 'A';
}
var aStudents1 = people.filter(startWithAnA);

var aStudents2 = people.filter(function(element) {
  return element[0] === 'A';
});

// catalog items

var items = [
  { name: 'Basketball', price: 15.99, quantity: 2 },
  { name: 'Pump', price: 8.99, quantity: 1 },
  { name: 'Whistle', price: 2.99, quantity: 1 },
  { name: 'Cones', price: 3.99, quantity: 10 },
];

// return an array of the prices
var prices = items.map(function(item) {
  return item.price;
});

var expensiveItems = items.filter(function(item) {
  return item.price > 10;
});

console.log('Expensive items: ', expensiveItems);

var prices = items.map(function(item) {
  return item.price * item.quantity;
});

console.log('Prices', prices);


var numbers = [1, 2, 8, 2, 1, 0, 4];
var numbers2 = [-4, 5, -6, -4, 1];
// get the largest number in the array using reduce
var largest = numbers.reduce(function(currentValue, number) {
  if (number > currentValue) {
    return number;
  } else {
    return currentValue;
  }
}, numbers[0]);

// given an array of numbers, return true if all numbers are positive
// return false otherwise
var allPositive2 = numbers2.reduce(function(currentValue, number) {
  if (!currentValue) {
    return false;
  }
  if (number < 0) {
    return false;
  } else {
    return true;
  }
}, true);


var allPositive = numbers.reduce(function(allPositive, number) {
  // above example is equivalent to
  return allPositive && number >= 0;
}, true);


var allPositive = numbers.reduce(function(allPositive, number) {
  // or equivalent to
  return allPositive && number >= 0;
}, true);

// every returns true if all elements satisfy the condition
var allPositive = numbers.every(function(number) {
  return number >= 0;
});

// some returns true if any element satisfies the condition
var somePositive = numbers.some(function(number) {
  return number >= 0;
});

var allPositive = !numbers.some(function(number) {
  return number < 0;
});
