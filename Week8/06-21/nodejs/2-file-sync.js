/*
A example of reading the contents of a file using the readFileSync API.
*/

var fs = require('fs');

// read the file, you get a buffer
var buffer = fs.readFileSync('a-file.txt');
// printing the buffer looks like gibberish
console.log('Buffer:', buffer);

// convert the buffer into a string
var stringContents = buffer.toString();
// and now it makes sense
console.log('String contents:', stringContents);
