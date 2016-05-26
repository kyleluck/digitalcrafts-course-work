/*

## nTimes Function

Write a function `nTimes(fun, n)` that takes a function `fun` and performs `fun` n times. #function #easy

*/

function nTimes(fun, n) {
  for (var i = 0; i < n; i++) {
    fun();
  }
}

function sayMyName() {
  console.log("Kyle");
}

nTimes(sayMyName, 3);
