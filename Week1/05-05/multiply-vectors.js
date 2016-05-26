/*
## Multiply Vectors

Given two arrays of numbers of the same length, create a new array by multiplying the pairs of numbers in corresponding positions in the two arrays. Example:

[2, 4, 5] x [2, 3, 6] = [4, 12, 30]

#array #loop #medium #math
*/

var firstArray = [2, 4, 5];
var secondArray = [2, 3, 6];
var resultArray = [];

for (var i = 0; i < firstArray.length; i++) {
    resultArray.push(firstArray[i] * secondArray[i]);
}

console.log(resultArray);
