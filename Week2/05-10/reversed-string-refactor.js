// var string = "JavaScript";
// var length = string.length;
// var reversedString = "";
// var counter = length - 1;
// while (counter >= 0) {
//   var letter = string.charAt(counter);
//   reversedString = reversedString + letter;
//   counter = counter - 1;
// }

function reverseString(string) {
  var reversedString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    var letter = string.charAt(i);
    reversedString += letter;
  }
  return reversedString;
}

console.log(reverseString("JavaScript"));
