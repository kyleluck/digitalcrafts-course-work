/*

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

*/

function threeTimes(fun) {
  for (var i = 0; i < 3; i++) {
    fun();
  }
}

function hello() {
  console.log('Hello!');
}

threeTimes(hello);
