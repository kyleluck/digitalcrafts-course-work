/*

What to learn?

* variables
* if statements
* loops
  * while
  * do-while
  * for
* arrays
  * length and subscript notiation []
  * push
  * pop
  * various array methods
* objects
  * object literal
  * dot operator for read and write
  * subscript notation [] for read and write
  * for-in loop
  * in operator
  * delete statement
  * various Object methods
* functions
  * how to define a function
  * how to call a function
  * a function can be stored in a variable
  * various function methods
  * higher-order functions

*/

describe('numbers', function () {
  it('adds', function () {
    expect(1 + 2).toEqual(3);
  });
  it('subtracts', function () {
    expect(3 - 1).toEqual(2);
  });
});

describe('arrays', function () {
  it('gives you its length', function (){
    expect([].length).toEqual(0);
    expect([1, 2, 3].length).toEqual(3);
  });

  it('you can access its elements by index', function () {
    var arr = [4, 5, 6];
    expect(arr[0]).toEqual(4);
    expect(arr[1]).toEqual(5);
    expect(arr[2]).toEqual(6);
  });

  it('pushes to end of array', function () {
    var arr = [1, 2, 3];
    arr.push(4);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it('pops from end of array', function () {
    var arr = [1, 2, 3];
    var itemRemoved = arr.pop();
    expect(itemRemoved).toEqual(3);
    expect(arr).toEqual([1, 2]);
  });
});

describe('objects', function () {
  it('allows access to properties though dot notation', function () {
    var myCar = {};
    myCar.make = "BMW";
    expect(myCar.make).toEqual("BMW");
  });
  it('allows access to properties through bracket notation', function () {
    var myCar = {
      make: "BMW"
    };
    expect(myCar["make"]).toEqual("BMW");
  });
  it('allows objects as properties', function() {
    var myCar = {
      make: "BMW",
      model: "M3",
      favTrack: {
        state: "Georgia",
        name: "Road Atlanta"
      }
    };
    expect(myCar.favTrack.name).toEqual("Road Atlanta");
  });
});

describe('functions', function () {
  it('can be stored in a variable', function () {
    var myFunction = function () {
      return 3 + 3;
    }
    expect(myFunction()).toEqual(6);
  });
  it('functions can be returned by functions', function () {
    function returnFunction () {
      return function square(n) {
        return n * n;
      }
    }
    var squareNumber = returnFunction();
    expect(squareNumber(2)).toEqual(4);
  });
  it('can pass functions as parameters', function () {
    function addOne (fun, n) {
      var squared = fun(n);
      return squared + 1;
    }
    function square (n) {
      return n * n;
    }
    var result = addOne(square, 2);
    expect(result).toEqual(5);
  });
});

describe('loops', function () {
  it('for loops iterate with a counter, condition, and incremental', function () {
    var sum = 0;
    for (var i = 1; i < 6; i++) {
      sum += i;
    }
    expect(sum).toEqual(15);
  });
  it('supports do loops that execute at least once', function () {
    var sum = 0, i = 1;
    do {
      sum += i;
      i++;
    } while (i < 6);
    expect(sum).toEqual(15);
  });
});
