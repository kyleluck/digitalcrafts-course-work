/*

## Each Function

Write a function `each(arr, fun)` that takes an array `arr` and a function `fun` that calls `fun(item)` for each item within the given array. #function #medium

*/

function each(arr, fun) {
  arr.forEach(function(val) {
    fun(val);
  });
}

function fun(item) {
  console.log(item);
}

var myArray = [3, "this", "that", 10];
each(myArray, fun);
