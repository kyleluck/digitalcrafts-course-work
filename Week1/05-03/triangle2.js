/*
## Print a Triangle II

Given a number as the height, print a triangle as in "Print a Triangle" but with the given height.

#loop #if #medium
*/

var height = 3;
var row = "";


for (var i = 0; i < height; i++) {
    for (var j = 0; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
}
