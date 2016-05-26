/*
## Map Function

Write a function `map(arr, fun)` that takes an array `arr` and a function `fun` that returns a new array, each element within containing the result of calling `fun(item)` on the item in the corresponding position of the given array. Example:

```
function square(n) {
  return n * n;
}

map([1, 2, 3], square) => [1, 4, 9];
```

#array #function #medium
*/

function map(arr, fun) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = square(arr[i]);
  }
  return newArr;
}

function square(element) {
  return element * element;
}

console.log(map([1, 2, 3], square));
