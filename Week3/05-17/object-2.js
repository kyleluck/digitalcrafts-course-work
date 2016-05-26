var obj1 = {};
var obj2 = new Object();

function Person(name) {
  this.name = name;
  this.children = [];
  this.age = undefined;
}

Person.prototype.greet = function () {
  console.log('Hello, I am ' + this.name + '!');
};

var mary = new Person('Mary');

mary.greet();
