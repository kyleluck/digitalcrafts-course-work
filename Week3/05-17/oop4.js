/*
## 4.

Given this constructor `Person`:

```
function Person(name) {
  this.name = name;
}
```

Add a method `greet()` to person objects created using this constructor. The `greet()` method should print to the console: "Hello, I am <name of person>!".
*/

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, I am " + this.name + "!");
};

var kyle = new Person("kyle");
kyle.greet();
