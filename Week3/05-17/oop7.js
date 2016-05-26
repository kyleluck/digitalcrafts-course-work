/*
## 7. Hand

Write a Hand type. You use the type as follows.

```
var hand = new Hand();
hand.addCard(new Card(1, 'spades'));
hand.addCard(new Card(13, 'hearts'));
hand.getPoints() // gives 21
*/

function Hand () {
  this.cards = [];
}

Hand.prototype.addCard = function (card) {
  this.cards.push(card);
}

Hand.prototype.getPoints = function () {
  var sum = 0;
  this.cards.forEach(function(val) {
    if (val.point === 1) {
      sum += 11;
    } else if (val.point >= 10) {
      sum += 10;
    } else {
      sum += val.point;
    }
  });
  return sum;
};

function Card (point, suit) {
  this.point = point;
  this.suit = suit;
}

var hand = new Hand();
hand.addCard(new Card(1, 'spades'));
hand.addCard(new Card(13, 'hearts'));
console.log(hand.getPoints()); // gives 21
