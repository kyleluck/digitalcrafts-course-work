# Error Handling

## Try/Catch

Given this add function:

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return x + y;
}

Use this function to add two numbers. Then use it to add two strings, while gracefully handling any errors that occurs using the try/catch statement.

## Async

Given this asyncAdd function:

function asyncAdd(x, y, callback) {
  setTimeout(function() {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    callback(x + y);
  }, 1000);
}

Use it to add two numbers. Then use it to add two strings, while gracefully handling any errors that occurs using the Node's error handling convention of checking the first parameter for an error.

# Closures

## Make a counter with a closure

Make a counter using closure such that the actual counter variable is hidden. You would use the counter/count function like this:

var count = makeCounter();
console.log(count()); // outputs 1
console.log(count()); // outputs 2
console.log(count()); // outputs 3, etc

## Make a calculator with a closure

Same concept as the counter. But this time, it's a calculator, you can do more that just count. You can add and subtract to the number that's hidden in the closure, and then access it via the getNumber() method. makeCalculator will return an object, and it will have the methods: getNumber, add, subtract, and times.

var calc = makeCalculator();
console.log(calc.getNumber()); // outputs 0
calc.add(4);
console.log(calc.getNumber()); // outputs 4
calc.subtract(2);
console.log(calc.getNumber()); // outputs 2
calc.times(3);
console.log(calc.getNumber()); // outputs 6

# npm Modules

## Making your own module - 1

Create a module that converts a temperature from degrees Celcius to Fahrenheit. Write the following example program called c-to-f-program.js to use that module to do a conversion:

var convertCtoF = require('./c-to-f-module');
var degreesC = Number(process.argv[2]);
var degreesF = convertCtoF(degreesC);
console.log(degreesF);

Example output of the above program:

$ node c-to-f-program.js 18
64.4
$ node c-to-f-program.js 30
86

## Making your own async module - 2

Take the program you wrote earlier in the week that read a file and printed its line count and character count, convert that into a module. The module should export a function that takes two parameters:

* a file name
* a callback function that takes two parameters
  * a potential error object
  * a summary object that contains the properties lineCount and charCount.

The following program file-summary-program.js can be used to test your module:

var fileSummary = require('./file-summary-module');
var filename = process.argv[2];
fileSummary(filename, function(err, summary) {
  if (err) {
    console.error(err.message);
    return
  }
  console.log('Line count:', summary.lineCount);
  console.log('Character count:', summary.charCount);
});

Example output:

$ node file-summary-program.js hello.txt
Lines: 1
Characters: 13
$ node file-summary-program.js file-that-doesnt-exist.txt
ENOENT: no such file or directory, open 'file-that-doesnt-exist.txt'

## Publishing your own module

You are going to publish your file-summary module to npm. Create a new directory in a separate directory, call it file-summary. cd into the directory, do `npm init`, answer the questions to generate a package.json file. Your module name will need to be unique to the entire npm registery - which is immense. For that reason, to distinguish your file-summary module from other modules, I suggest calling your module file-summary-YOUR_FIRST_NAME, replacing YOUR_FIRST_NAME with your first name.

Create an index.js file, paste in the contents of file-summary-module.js from the previous exercise. Now you are almost ready to publish, but one thing first: create a user account on npmjs.org:

npm adduser

It will ask for a username, password, and an email address. Once this is done, you can

npm publish

You've published you first module! Now to test that it actually works. Create a brand new project directory. Within that directory, run `npm install YOUR_MODULE_NAME` - replacing YOUR_MODULE_NAME with the name of your module. When write a program to test it, similar to test-summary-program.js in the previous exercise, except this time, you can require('YOUR_MODULE_NAME') directly instead of using a relative file name.

## Bonus

Make another npm module, this time come up with something creative!
