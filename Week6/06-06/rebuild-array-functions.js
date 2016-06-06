/*## Bonus

* Write your own map implementation
* Write your own filter implementation
* Write your own reduce implementation
* Rewrite filter using reduce
* Write your own every implementation using reduce

*/

function MyArray (arr) {
  this.arr = arr;
}
MyArray.prototype.myMap = function(func) {
  var arrayToReturn = [];
  for (var i = 0; i < this.arr.length; i++) {
    arrayToReturn.push(func(this.arr[i]));
  }
  return arrayToReturn;
};
MyArray.prototype.myFilter = function(func) {
  var arrayToReturn = [];
  for (var i = 0; i < this.arr.length; i++) {
    if (func(this.arr[i])) {
      arrayToReturn.push(this.arr[i]);
    }
  }
  return arrayToReturn;
};
MyArray.prototype.myReduce = function(func, startingValue) {
  for (var i = 0; i < this.arr.length; i++) {
    startingValue = func(startingValue, this.arr[i]);
  }
  return startingValue;
};
MyArray.prototype.myFilterUsingReduce = function(func) {
  return this.arr.reduce(function(starting, element) {
    if (func(element)) {
      starting.push(element);
    }
    return starting;
  }, []);
};
MyArray.prototype.myEvery = function(func) {
  for (var i = 0; i < this.arr.length; i++) {
    if (!func(this.arr[i])) {
      return false;
    }
  }
  return true;
};
MyArray.prototype.myEveryUsingReduce = function(func) {
  return this.arr.reduce(function(starting, element) {
    if (!func(element)) {
      starting = false;
    }
    return starting;
  },true);
};

/* test myMap rewrite */
var newArr = new MyArray([1,-2,3]);
var arr2 = newArr.myMap(function(n) {
  return n * 2;
});
console.log('test myMap original array', newArr);
console.log('test myMay new array', arr2);

/* test myFilter rewrite */
var arr3 = new MyArray([-1, 3, 6]);
var noNegatives = arr3.myFilter(function(n) {
  return n >= 0;
});
console.log('test myFilter original array', arr3);
console.log('test myFilter result is ', noNegatives);

/* test myReduce */
var arr4 = new MyArray([-3, 10, 4, -2]);
var reduceToSum = arr4.myReduce(function(sum, n) {
  return sum + n;
}, 0);
console.log('test myReduce', reduceToSum);

/* test myFilterUsingReduce */
var arr6 = new MyArray([-1, 3, 6]);
var noNeg = arr6.myFilterUsingReduce(function(n) {
  return n > 0;
});
console.log('test myFilterUsingReduce', noNeg);

/* test myEvery */
var arr5 = new MyArray([1, 3, 5]);
var allPositive = arr5.myEvery(function(n) {
  return n > 0;
});
console.log('test myEvery ', allPositive);

/* test myEveryUsingReduce */
var arr7 = new MyArray([1, 3, -5]);
var allPositive = arr7.myEveryUsingReduce(function(n) {
  return n > 0;
});
console.log('test myEveryUsingReduce ', allPositive);
