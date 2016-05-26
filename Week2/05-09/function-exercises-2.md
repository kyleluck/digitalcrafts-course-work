# Function Exercises 2

## threeTimes Function

Write a function `threeTimes(fun)` that takes a function `fun` and performs `fun` three times. Example

```
function hello() {
  console.log('Hello!');
}

threeTimes(hello);
```

Gives the output of:

```
Hello!
Hello!
Hello!
```

#function #easy

## nTimes Function

Write a function `nTimes(fun, n)` that takes a function `fun` and performs `fun` n times. #function #easy

## Each Function

Write a function `each(arr, fun)` that takes an array `arr` and a function `fun` that calls `fun(item)` for each item within the given array. #function #medium

## Map Function

Write a function `map(arr, fun)` that takes an array `arr` and a function `fun` that returns a new array, each element within containing the result of calling `fun(item)` on the item in the corresponding position of the given array. Example:

```
function square(n) {
  return n * n;
}

map([1, 2, 3], square) => [1, 4, 9];
```

#array #function #medium

## Filter Function

Write a function `filter(arr, fun)` that takes an array `arr` and a function `fun` that returns a new array, consisting of only the items in the given array for which `fun(item)` returns a truthy value.

#array #function #medium

## Find Function

Write a function `filter(arr, fun)` that takes an array `arr` and a function `fun` that returns the first item in the array for which `fun(item)` returns a truthy value.

#array #function #medium

## Reduce Function (Extra Credit!)

Write a function `reduce(arr, accumulator, initValue)` that takes an array `arr`, a function `accumulator`, and an initial value `initValue` that returns the final accumulated value. The accumulated value is calculated by starting from the last element (from left to right) of `arr`, calling `accumulator(currentValue, item)` for each item in the array. `currentValue` is initially the value of `initValue`, but is subsequently the returned value from `accumulator` in each call to that function. Example

```
var sum = reduce([1, 2, 3], function(currentValue, num) {
  return currentValue + num;
}, 0);
// sum is 6
```

See more <https://www.airpair.com/javascript/javascript-array-reduce>.

## Refactoring Tim's Box

Refactor/rewrite Tim's Box program to not use any loops by using functional programming. #functions #hard

## Refactoring

Take 2 of the most complex program you've written so far, and rewrite it using functional programming - without using any loops. #functions #hard
