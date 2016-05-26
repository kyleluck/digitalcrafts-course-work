/*
## Refactor Tim's Box

Take Tim's box program and refactor it by extracting functions and/or variables.
*/

var cols = 15;
var rows = 10;

// Task 1: print top bun
function printBun(char) {
  var lineOfStars = '';
  for (var i = 1; i <= cols; i++) {
    lineOfStars += char;
  }
  console.log(lineOfStars);
}

// Task 2: print the meat
function printMeat(char) {
  var line = '';
  for (var i = 1; i <= rows - 2; i++) {
    for (var j = 1; j <= cols; j++) {
      if (j === 1 || j === cols) {
        line += char;
      }
      else {
        line += " ";
      }
    }
    console.log(line);
    line = '';
  }
}

printBun("*");
printMeat("*");
printBun("*");
