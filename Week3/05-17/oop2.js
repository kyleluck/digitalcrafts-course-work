/*

## 2.

```
function greet() {
  console.log("Hi, my name is " + this.name);
}

var mary = {
  name: 'Mary',
  greet: greet
};

var ben = {
  name: 'Ben'
};
```

Given the above code, it is possible (with code) to call greet with its `this` variable bound to `ben`?

*/

function greet() {
  console.log("Hi, my name is " + this.name);
}

var mary = {
  name: 'Mary',
  greet: greet
};

var ben = {
  name: 'Ben',
  greet: greet
};

ben.greet();
