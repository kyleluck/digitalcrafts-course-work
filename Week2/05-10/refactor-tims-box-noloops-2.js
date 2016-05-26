/*
## Refactor Tim's Box

Refactor/rewrite Tim's Box program to not use any loops by using functional programming. #functions #hard
*/

function printBox(rowNumber, columnNumber, rows, columns, line, char) {
  if (rowNumber === 1 || rowNumber === rows || columnNumber === 1 || columnNumber === columns) {
    line += char;
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
    printBox(rowNumber, columnNumber, rows, columns, line, char);
  }
  else {
    printBox(rowNumber, columnNumber, rows, columns, line, char);
  }
}

printBox(1, 1, 5, 4, "", "*"); //print a 5 x 4 box with *
printBox(1, 1, 10, 10, "", "^"); //print 10 x 10 with ^
printBox(1, 1, 15, 32, "", "@"); //print 2 x 2 with #
