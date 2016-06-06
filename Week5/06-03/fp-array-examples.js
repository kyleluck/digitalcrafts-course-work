var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map takes a transform function, it returns a new array
// containing each of the elements of arr as transformed by the
// transform function

// make a new array that has each number in arr doubled
var doubled = arr.map(function(n) {
  return n * 2;
});

// filter takes a matcher function, it returns a new array
// containing each element in arr for which matcher(element) is true

// make a new array that has all the odd numbers in arr
var odds = arr.filter(function(n) {
  return n % 2 === 1;
});

// reduce takes combiner function and an initial value.
// combiner takes two arguments: the current value and the current element
// the current value is initially equal to the initial value
// and the current element initially the first element of the array
// the value returned by the combiner becomes the next current value
// then the combiner is called with the new current value and the next element in the array
// and so one
// reduce returns the final current value after having processed each element of the array in this way

// sums an array
var sum = arr.reduce(function(sum, n) {
  return sum + n;
}, 0);

// reverse the odds array
var oddsReversed = odds.reduce(function(list, n) {
  list.unshift(n);
  return list;
}, []);

// another reduce example, reversing a string
var str = 'hello';
// split the string into an array of characters so we can use reduce on it
var strCharactors = str.split('');
var strReversed = strCharactors.reduce(function(result, c) {
  return c + result;
});

// another reduce example
// tallying the words in an array
var words = ['to', 'be', 'or', 'not', 'to', 'be'];
var wordCount = words.reduce(function(tally, word) {
  if (!tally[word]) {
    tally[word] = 0;
  }
  tally[word]++;
  return tally;
}, {});


// every takes a matcher function and returns true if matcher(element)
// returns true for every element in the array

// this function returns true if the given numbers array contains
// only odd numbers
functon isAllOdd(numbers) {
  return numbers.every(function(n) {
    return n % 2 === 1;
  });
}
