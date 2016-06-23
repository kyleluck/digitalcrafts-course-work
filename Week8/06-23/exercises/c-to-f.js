var convertCtoF = require('./c-to-f-module');
var degreesC = Number(process.argv[2]);
var degreesF = convertCtoF(degreesC);
console.log(degreesF);
