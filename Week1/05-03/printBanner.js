/*
## Print a Banner

Given a string, print that string with a box around it. The box should stretch to the length of the string. For example, given the string "Welcome to Digital Crafts", you should print:

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃Welcome to Digital Crafts┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛
```
*/

var text = "Welcome to Digital Crafts";
var height = 3;
var width = text.length + 2;
var row = "";

for (var i = 1; i <= height; i++) {
  for (var j = 1; j <= width; j++) {
    if (i === 1) {
      if (j === 1) {
        row = row + "┏";
      }
      else if (j === width) {
        row = row + "┓";
      }
      else {
        row = row + "━";
      }
    }
    else if (i === height) {
      if (j === 1) {
        row = row + "┗";
      }
      else if (j === width) {
        row = row + "┛";
      }
      else {
        row = row + "━";
      }
    }
    else if (j === 1 || j === width){
      row = row + "┃";
    }
    else {
      row = row + text.charAt(j-2);
    }
  }
  console.log(row);
  row = "";
}
