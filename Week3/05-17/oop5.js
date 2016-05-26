/*
## 5. Counter

Write a Counter type. You use the type as follows. First create a counter:

```
var counter = new Counter();
```

Then you can call the counter's `count()` method to count and get the next number in the count.

```
console.log(counter.count()); // prints 1
console.log(counter.count()); // prints 2
console.log(counter.count()); // prints 3
```

Bonus: write implement this using TDD. Copy the unit-test directory for a template of how to setup Jasmine.
*/

function Counter() {
  this.number = 0;
}

Counter.prototype.count = function() {
  return ++this.number;
}
var counter = new Counter();

console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
