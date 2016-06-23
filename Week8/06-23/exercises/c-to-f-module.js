/*
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
*/
// exports.convertCtoF = function(c) {
//   //Multiply by 9, then divide by 5, then add 32
//   return c * 9 / 5 + 32;
// };
module.exports = function(c) {
  //Multiply by 9, then divide by 5, then add 32
  return c * 9 / 5 + 32;
};
