# OOP Exercises

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

## 4.

Given this constructor `Person`:

```
function Person(name) {
  this.name = name;
}
```

Add a method `greet()` to person objects created using this constructor. The `greet()` method should print to the console: "Hello, I am <name of person>!".

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

## 6. Card

Write a Card type. You use the type as follows.

```
var card = new Card(1, 'spades');
card.point // gives 1
card.getPointName() // gives "ace";
card.suit // => "spades"
card.getImageUrl() // gives "images/ace_of_spades.png"
```

## 7. Hand

Write a Hand type. You use the type as follows.

```
var hand = new Hand();
hand.addCard(new Card(1, 'spades'));
hand.addCard(new Card(13, 'hearts'));
hand.getPoints() // gives 21
```

## 8. Deck

Write a Deck type. You use the type as follows:

```
var deck = new Deck();
deck.numCards() // gives 52;
var card = deck.draw(); // gives a card and removes it from the deck
