/*
## 3.

Create a constructor Vehicle that takes 3 parameters:

* make
* model
* year

A new Vehicle is created thus:

```
var car = new Vehicle('Nissan', 'Leaf', 2015);
```

And it should contain the properties 'make', 'model', and 'year'.
*/

function Vehicle (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car = new Vehicle('Nissan', 'Leaf', 2015);

console.log(car.make + " " + car.model + " " + car.year);
