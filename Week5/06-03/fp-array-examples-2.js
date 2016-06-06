var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var arr2 = [];
for (var i = 0; i < arr.length; i++) {
  arr2.push(arr[i] * 2);
}

/*
Not recommended. Don't override Array.prototype.map.
But I will do it because I am the instructor.

* transform - a function that transforms each item in me.
*/
Array.prototype.map = function myMap(transform) {
  var retArr = [];
  for (var i = 0; i < this.length; i++) {
    var value = this[i];
    retArr.push(transform(value, i));
  }
  return retArr;
};

// Map examples
var arr3 = arr.map(function(n) {
  return n * 2;
});

var students = [
  { name: 'Carolyn' },
  { name: 'DeeAnn' },
  { name: 'Cody' }
];

var studentNames = students.map(function(s) {
  return s.name;
});

/*
Given an array of numbers, return a new array, with the original
numbers, except, if the number is negative, substitute 0.
*/
var numbers = [-1, -3, 6, 7];

var newArr = numbers.map(function(n) {
  if (n < 0) {
    return 0;
  } else {
    return n;
  }
});


/*
filter
*/
var oddNumbers = arr.filter(function(n) {
  return false;
});


/*
reduce
takes a combiner function, and an initial value
*/

var sum = arr.reduce(function(currentValue, n) {
  return n + currentValue;
}, 0);

var sum = 0;
for (var i = 10; i < 1000; i++) {
  sum += arr[i];
}

var players = [
  { name: 'Bob', points: 22 },
  { name: 'James', points: 12 },
  { name: 'Dora', points: 34 }
];

players.map(function(player) {
  return player.points;
}).reduce(function(sum, points) {
  return sum + points;
}, 0);
// or

players.reduce(function(sum, player) {
  return sum + player.points;
}, 0);

var people = [
  { name: 'Toby', children: ['Marty', 'Linus', 'Emma'] },
  { name: 'Sandhya', children: ['Eshani', 'Saanvi'] }
];

var allChildren = people.reduce(function(children, person) {
  return children.concat(person.children);
}, []);
