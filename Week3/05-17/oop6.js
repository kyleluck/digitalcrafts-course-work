/*
## 6. Card

Write a Card type. You use the type as follows.

```
var card = new Card(1, 'spades');
card.point // gives 1
card.getPointName() // gives "ace";
card.suit // => "spades"
card.getImageUrl() // gives "images/ace_of_spades.png"
```
*/

function Card (point, suit, url) {
  this.point = point;
  this.suit = suit;
  this.url = url;
}

Card.prototype.getPointName = function () {
  if (this.point === 1) {
    return 'ace';
  }
  return this.point;
};

Card.prototype.getImageUrl = function () {
  return this.url;
};

var card = new Card(1, 'spades', 'image/ace_of_spades.png');
card.point // gives 1
card.getPointName() // gives "ace";
card.suit // => "spades"
card.getImageUrl() // gives "images/ace_of_spades.png"
