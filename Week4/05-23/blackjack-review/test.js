function countPoints(cards) {
  var hand = cards.slice(0);
  var sorted = [];
  var sum = 0;
  hand.sort(compare);

  function compare(card1, card2) {
    return card2.point - card1.point;
  }

  for (var i = 0; i < hand.length; i++) {
    if (hand[i].point === 1) {
      if (sum + 11 < 21) {
        sum += 11;
      }
      else {
        sum += 1;
      }
    }
    else {
      sum += hand[i].point;
    }
  }
  return sum;
}

var cards = [{point: 1, suit: "spades"}, {point: 10, suit: "spades"}, {point: 5, suit: "spades"}];
console.log(countPoints(cards));
