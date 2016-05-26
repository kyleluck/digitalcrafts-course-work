/*

## Reduce Function (Extra Credit!)

Write a function `reduce(arr, accumulator, initValue)` that takes an array `arr`, a function `accumulator`, and an initial value `initValue` that returns the final accumulated value. The accumulated value is calculated by starting from the last element (from left to right) of `arr`, calling `accumulator(currentValue, item)` for each item in the array. `currentValue` is initially the value of `initValue`, but is subsequently the returned value from `accumulator` in each call to that function. Example

```
var sum = reduce([1, 2, 3], function(currentValue, num) {
  return currentValue + num;
}, 0);
// sum is 6
```

See more <https://www.airpair.com/javascript/javascript-array-reduce>.

*/

function reduce(arr, accumulator, initValue) {
  var finalValue = initValue;
  for (var i = 0; i < arr.length; i++) {
    finalValue = accumulator(finalValue, arr[i]);
  }
  return finalValue;
}

function accumulator(currentValue, num) {
  return currentValue + num;
}

var testArray = [1, 2, 3];
console.log(reduce(testArray, accumulator, 0)); //expect 6
