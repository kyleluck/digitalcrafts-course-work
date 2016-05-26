/*
## 1.

```
function greet() {
  console.log("Hi, my name is " + this.name);
}

var mary = {
  name: 'Mary',
  greet: greet
};
```

Given the above code, how to call the `greet` function with its `this` variable bound to `mary`?
*/

function greet() {
  console.log("Hi, my name is " + this.name);
}

var mary = {
  name: 'Mary',
  greet: greet
};

mary.greet();
