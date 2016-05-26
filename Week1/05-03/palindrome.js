/*
## Palindrome

Given a string, print "<string> is a palindrome" if it is a palindrome, or "<string> is not a palindrome" if it is not. What is a palindrome? <https://en.wikipedia.org/wiki/Palindrome>

Here is a list of know palindromes to test with (you will have to strip out the punctuation and spaces and normalize the casing) <http://www.palindromelist.net/>

#string #if #loop #easy
*/

var str = "A Santa dog lived as a devil God at NASA.";
//var str = "This is not a plaindrome";
var isPalindrome = true;

//make string lowercase
var strLower = str.toLowerCase();

//strip out punctionation
var strTrimed = strLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

//strip out any spaces
var strNoSpaces = strTrimed.replace(/\s+/g, "");

//convert to Array
var strArr = strNoSpaces.split("");

//reverse array and save with slice as to not alter the original array
var strReversed = strArr.slice(0).reverse();

//loop through array and see if characters match
for (var i = 0; i < strArr.length; i++) {
  if(strArr[i] !== strReversed[i]) {
    isPalindrome = false;
    break;
  }
}

//so... is it a palindrome?
if (isPalindrome) {
  console.log(str + " is a plaindrome.");
}
else {
  console.log(str + " is not a palindrome.");
}
