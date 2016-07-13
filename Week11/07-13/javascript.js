





// Math

> 2 + 3
5
> 3 * 4
12
> 10 % 3
1
> Math.pow(2, 2)
4




















// Boolean values
> true
true
> false
false












// Strings

> "abc"
'abc'
> 'abc'
'abc'
> 'abc'.indexOf('b')
1
> 'abc'.charAt(1)
'b'
> 'a' > 'b'
false
> 'a' < 'b'
true
> subject = 'world'
'world'
> 'hello, ' + subject
'hello, world'
> 'abc,def,ghi'.split(',')
[ 'abc', 'def', 'ghi' ]
> 'abcdefghijklmnopqrstuvwxyz'.substring(5, 8)
'fgh'

// Variables
> var n = 4;
undefined
> var name = "Aditi";
undefined

// If statements
if (n > 3) {
  console.log('n is greater than 3');
} else {
  console.log('n is less or equal to 3');
}

// Functions

> function sayHello() {
  console.log('Hello, world!');
}

> function add(x, y) {
  return x + y;
}
> add(2, 3)

> add(1)
NaN
> add()
NaN

// return statements that return nothing
> function openSesame(password) {
  if (password !== 'secret') {
    return;
  }
  console.log('Open');
}

// Spread: apply a list as argument list
> add.apply(null, [1, 2])
> Math.max.apply(null, [1, 2])

// Variable length argument list
> function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
> addAll(1, 2, 4, 5)
12
> var args = [3, 9, 4]
undefined
> addAll.apply(null, args)
16

// Arrays
> [1, 2, 3, 4]
[ 1, 2, 3, 4 ]
> var arr = [1, 2, 3, 4]
undefined
> arr.length
4
> arr[0]
1
> arr[1]
2
> arr.indexOf(3)
2
> arr.slice(1, 3)
[ 2, 3 ]
> arr.push(5)
5
> arr
[ 1, 2, 3, 4, 5 ]
> arr.splice(2, 1)
[ 3 ]
> arr
[ 1, 2, 4, 5 ]

> var arr = [4, 2, 10]
undefined
> arr.sort()
[ 10, 2, 4 ]
> arr
[ 10, 2, 4 ]


// Looping over arrays

> for (var i = 0; i < arr.length; i++) {
...   console.log(arr[i]);
... }
10
2
4


// While loops
> var counter = 0;
> while (counter < 5) {
...   console.log(counter);
...   counter++;
... }
0
1
2
3
4
4
