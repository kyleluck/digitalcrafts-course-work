/*

## Matrix Addition

Given two two-dimensional arrays of numbers of the size 2x2
two dimensional array is represented as an array of arrays:

```
[ [2, -2],
  [5, 3] ]
```

Calculate the result of adding the two matrices. The number in each position in the resulting matrix should be the sum of the numbers in the corresponding addend matrices. Example: to add

```
1 3
2 4
```
and
```
5 2
1 0
```
results in
```
6 5
3 4
```
#math #loop #array #medium

*/

var first = [[1, 3], [2, 4]];
var second = [[5, 2], [1, 0]];
var result = [];

for (var i = 0; i < first.length; i++) {
  var row = [];
  for (var j = 0; j < first[i].length; j++) {
    row.push(first[i][j] + second[i][j]);
  }
  result.push(row);
}

console.log(result);
