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
MyArray.prototype.myReduceUsingFilter = function(func, startingValue) {

};
MyArray.prototype.myEvery = function(func) {
  for (var i = 0; i < this.arr.length; i++) {
    if (!func(this.arr[i])) {
      return false;
    }
  }
  return true;
};


/* test myMap rewrite */
var newArr = new MyArray([1,-2,3]);
var arr2 = newArr.myMap(function(n) {
  return n * 2;
});
console.log(newArr);
console.log(arr2);

/* test myFilter rewrite */
var arr3 = new MyArray([-1, 3, 6]);
var noNegatives = arr3.myFilter(function(n) {
  return n >= 0;
});
console.log(arr3);
console.log(noNegatives);

/* test myReduce */
var arr4 = new MyArray([-3, 10, 4, -2]);
var reduceToSum = arr4.myReduce(function(sum, n) {
  return sum + n;
}, 0);
console.log(reduceToSum);

/* test myEvery */
var arr5 = new MyArray([1, 3, 5]);
var allPositive = arr5.myEvery(function(n) {
  return n > 0;
});
console.log(allPositive);
