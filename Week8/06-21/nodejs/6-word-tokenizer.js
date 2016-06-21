/*
Installing natural module:

npm install natural

You should have a node_modules folder in your project directory, and a folder named natural should be inside it.
*/

// require the natural module
var natural = require('natural');
// create an instance of a word tokenizer
var tokenizer = new natural.WordTokenizer();

// tokenize the words
var words = tokenizer.tokenize('Hello, world!');
// print out the array of words
console.log('The words are:', words);
