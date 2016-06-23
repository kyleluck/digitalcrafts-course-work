/*
## Make a counter with a closure

Make a counter using closure such that the actual counter variable is hidden. You would use the counter/count function like this:

var count = makeCounter();
console.log(count()); // outputs 1
console.log(count()); // outputs 2
console.log(count()); // outputs 3, etc
*/

function makeCounter() {
  var counter = 1;
  return function() {
    return counter++;
  };
}

var count = makeCounter();
console.log(count()); // outputs 1
console.log(count()); // outputs 2
console.log(count()); // outputs 3, etc
