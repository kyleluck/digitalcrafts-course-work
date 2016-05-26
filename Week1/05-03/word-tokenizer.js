/*
## Word Tokenizer

Given a paragraph of text, print the number of words in the paragraph. #string #easy
*/

var paragraph = "Given a paragraph of text, print the number of words in the paragraph.";
var paragraphArray = paragraph.split(" ");
var numberWords = paragraphArray.length;

console.log(numberWords);
