function makeCounter() {
  var counter = 0;
  function count() {
    return counter++;
  }
  return count;
}

var count = makeCounter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
