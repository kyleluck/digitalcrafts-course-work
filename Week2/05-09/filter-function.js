/*
## Filter Function

Write a function `filter(arr, fun)` that takes an array `arr` and a function `fun` that returns a new array, consisting of only the items in the given array for which `fun(item)` returns a truthy value.

#array #function #medium
*/

function filter(arr, fun) {
  var returnArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
        returnArr.push(arr[i]);
    }
  }
  return returnArr;
}

function fun(element) {
  return element;
}

console.log(filter([1, 0, true, false, "this"], fun));
