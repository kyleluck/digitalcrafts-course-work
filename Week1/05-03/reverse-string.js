/*
## Reverse a String

Given a string, print the string reversed. #string #loop #easy
*/

var str = "my name is kyle luck";
var length = str.length;
var result = "";

for (var i = length - 1; i >= 0; i--) {
    result += str.charAt(i);
}
console.log(result);
