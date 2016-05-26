/*
## Magic Square

Given an array of arrays of numbers, represented as a two dimensional grid:

```
[
[8, 1, 6],
[3, 5, 7],
[4, 9, 2]
]
```

Print "Magic square!" if the array is a magic square, and "Not a magic square." if the array is not a magic square. What is a magic square? <http://mathforum.org/alejandre/magic.square/adler/adler.whatsquare.html> #math #array #loop #medium

*/

/*
In a magic square:
  * each number occurs only once
  * sum of any row is the same
  * sum of any column is the same
  * sum of any diagonal is the same
*/

var array = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
];

// not a magic square for testing sum row:
// var array = [
//   [8, 1, 6],
//   [3, 9, 7],
//   [4, 9, 2]
// ];

// not a magic square for testing sum column:
// var array = [
//   [8, 1, 6],
//   [3, 5, 7],
//   [4, 9, 3]
// ];

var aMagicSquare = true;
var n = 3; //3x3 magic square
var sumShouldBe = n * (Math.pow(n, 2) + 1) / 2; //sum should be n(n^2+1)/2

//empty array that we'll populate with all numerical values to check for duplicates
var checkForDuplicates = [];

//variables to store the sum of each row
var sumOneRow = 0;
var sumOneColumn = 0;

//loop through rows
for (var i = 0; i < array.length; i++) {
  //loop through columns
  for (var j = 0; j < array[0].length; j++) {
    //push each number to a new array in order to chheck for duplicates
    checkForDuplicates.push(array[i][j]);
    //sum each row
    sumOneRow += array[i][j];
    //sum each column
    sumOneColumn += array[j][i];
  }
  //is the sum of the row what we expect?
  if (sumOneRow !== sumShouldBe) {
    aMagicSquare = false;
    //console.log("sum of row incorrect");
    break;
  }
  //reset sum for row
  sumOneRow = 0;
  //is the sum of the column what we expect?
  if (sumOneColumn !== sumShouldBe) {
    aMagicSquare = false;
    //console.log("sum of column incorrect");
    break;
  }
  //reset sum for column
  sumOneColumn = 0;
}



//check to see if sum of each column matches
prevSum = 0;

//sort checkForDuplicates array (a copy)
var sortedCheck = checkForDuplicates.slice().sort();

//now let's check for duplicates
var prevElem;
for (var k = 0; k < sortedCheck.length; k++) {
  if (sortedCheck[k] === prevElem) {
    aMagicSquare = false;
    //console.log("duplicates found");
  }
  prevElem = sortedCheck[k];
}

//so... is it a magic square?
if (aMagicSquare) {
  console.log("Magic square!");
}
else {
  console.log("Not a magic square.");
}
