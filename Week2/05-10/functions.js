/*

Mathematical functions

line equations like: y = x + 1
or math functions like:

f(n) = if n is odd n * n
       if n is even n + 5

<https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-functions-and-function-notation/v/what-is-a-function>

*/

function celcius2fahrenheit(c) {
  return c * 9 / 5 + 32;
}

var result = celcius2fahrenheit(40);



function isOdd(num) {
  return num % 2 === 1;
}

function isEven(num) {
  return num % 2 === 0;
}



// Local variables
// no return value
function printRow(length) {
  var row = '';
  for (var i = 0; i < length; i++) {
    row = row + '*';
  }
  console.log(row);
}

function printRow(length) {
  var row = '';
  for (var i = 0; i < length; i++) {
    row = row + '*';
  }
  console.log(row);
}

printRow(1);
printRow(2);
printRow(3);
printRow(4);
printRow(5);

/*
var n = 5;
for (var i = 0; i < n; i++) {
  printRow(5);
}
*/








// Recursive function
function printNumbers(n) {
  if (n <= 100) {
    console.log(n);
    printNumbers(n + 1);
  }
}

function positiveNumbers(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      ret.push(array[i]);
    }
  }
  return ret;
}

function negativeNumbers(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      ret.push(array[i]);
    }
  }
  return ret;
}

function oddNumbers(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      ret.push(array[i]);
    }
  }
  return ret;
}

function filter(array, matchFn) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    if (matchFn(array[i])) {
      ret.push(array[i]);
    }
  }
  return ret;
}

function oddNumbers(array) {
  return filter(array, isOdd);
}

// Just have them read this http://eloquentjavascript.net/03_functions.html
// http://adripofjavascript.com/blog/drips/variable-and-function-hoisting
