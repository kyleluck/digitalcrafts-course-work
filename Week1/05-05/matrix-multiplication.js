/*

## Matrix Multiplication

Given two two-dimensional arrays of numbers of the size 2x2 - calculate the result of multiplying the two matrices. Print the resulting matrix. How do you multiple two matricies? <https://www.khanacademy.org/math/precalculus/precalc-matrices/multiplying-matrices-by-matrices/v/matrix-multiplication-intro>

#array #loop #math #hard

*/

var first = [[1, 2], [3, 4]];
var second = [[5, 6], [7, 8]];
var result = [];

for (var i = 0; i < first.length; i++) {
  result[i] = [];
  for (var j = 0; j < first[0].length; j++) {
    var sum = 0;
    for (var k = 0; k < first.length; k++) {
      sum += first[i][k] * second[k][j];
    }
    result[i].push(sum);
  }
}
console.log(result);
/*
// 1x5 + 2x7
var one = first[0][0] * second[0][0] + first[0][1] * second[1][0];
console.log(one);

//1x6 + 2x8
var two = first[0][0] * second[0][1] + first[0][1] * second[1][1];
console.log(two);

//3x5 + 4x7
var three = first[1][0] * second[0][0] + first[1][1] * second[1][0];
console.log(three);

//3x6 + 4x8
var four = first[1][0] * second[0][1] + first[1][1] * second[1][1];
console.log(four);
*/
