/*
## Leetspeak

Given a paragraph of text as a string, print the paragraph in leetspeak. To translate a string to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase):

```
A => 4
E => 3
G => 6
I => 1
O => 0
S => 5
T => 7
```

Example: Leet => l337

#string #loop #medium
*/

//array of leetspeak characters
var leetspeak = {"A": 4, "E": 3, "G": 6, "I": 1, "O": 0, "S": 5, "T": 7};

//the string
var strToChange = "Make this leet speak because it is awesome!";

//the string capitalized
var strCapitalized = strToChange.toUpperCase();

//the string's characters in an array
var charArray = strCapitalized.split("");

//for each leetspeak character
for (var key in leetspeak) {
  //loop through string's character array
  for (var i = 0; i < charArray.length; i++) {
    //if a leetspeak character is found, assign the leetspeak character to the string's character array
    if(key === charArray[i]) {
      charArray[i] = leetspeak[key];
    }
  }
}
//print the array after joining
console.log(charArray.join(""));
