/*
## Title-Case a String

Given a string containing a phrase, print the title case of the string. What are the rules of title case? <http://grammar-monster.com/lessons/capital_letters_title_case.htm> #string #loop #medium
*/

var str = "i should title case this string of course.";
var strArr = str.split(" ");
var result = "";
var noCapital = ["a", "an", "the", "at", "under", "near", "upon", "by", "of",
"and", "or", "but"];

for (var i = 0; i < strArr.length; i++) {
  if (i === 0) {
    result = str.charAt(0).toUpperCase() + " ";
  }
  else {
    if(noCapital.indexOf(strArr[i]) === -1) {
      result += strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1).toLowerCase() + " ";
    }
    else {
      result += strArr[i] + " ";
    }
  }
}

console.log(result);
