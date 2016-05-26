/*
## Find Function

Write a function `filter(arr, fun)` that takes an array `arr` and a function `fun` that returns the first item in the array for which `fun(item)` returns a truthy value.

#array #function #medium
*/

function filter(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return arr[i];
    }
  }
}

function fun(item) {
    return item;
}

var testArray = [false, 0, 1, true];
console.log(filter(testArray, fun)); //expect 1
