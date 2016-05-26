/*
## Refactor Tim's Box

Refactor/rewrite Tim's Box program to not use any loops by using functional programming. #functions #hard
*/

var rows = 5;
var columns = 4;
var line = "";

function printCharacter(rowNumber, columnNumber) {
  if (rowNumber === 1 || rowNumber === rows || columnNumber === 1 || columnNumber === columns) {
    line += "*";
    columnNumber++;
    if (rowNumber > rows) {
      return true;
    }
  }
  else {
    line += " ";
    columnNumber++
  }
  if (columnNumber > columns) {
    console.log(line);
    rowNumber++;
    columnNumber = 1;
    line = "";
    printCharacter(rowNumber, columnNumber);
  }
  else {
    printCharacter(rowNumber, columnNumber);
  }
}

printCharacter(1, 1);
