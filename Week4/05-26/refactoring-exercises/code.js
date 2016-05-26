
/*
Simplify the if statement in this function.

Hint: combine multiple conditionals into a compound conditional
or test for a range of numbers.
*/
function workOrSleepIn(day) {
  if (day === 0) {
    return 'Sleep In';
  } else if (day === 1) {
    return 'Work';
  } else if (day === 2) {
    return 'Work';
  } else if (day === 3) {
    return 'Work';
  } else if (day === 4) {
    return 'Work';
  } else if (day === 5) {
    return 'Work';
  } else if (day === 6) {
    return 'Sleep In';
  } else {
    throw new Error('Invalid day: ' + day);
  }
}

/*
Simplify the if statement in this function.
*/
function daysInMonth(month) {
  if (month === 1) {
    return 31;
  } else if (month === 2) {
    return 28;
  } else if (month === 3) {
    return 31;
  } else if (month === 4) {
    return 30;
  } else if (month === 5) {
    return 31;
  } else if (month === 6) {
    return 30;
  } else if (month === 7) {
    return 31;
  } else if (month === 8) {
    return 31;
  } else if (month === 9) {
    return 30;
  } else if (month === 10) {
    return 31;
  } else if (month === 11) {
    return 30;
  } else if (month === 12) {
    return 31;
  } else {
    throw new Error('Invalid month: ' + month);
  }
}

/*
From this function, extract a new function row(n) which
creates a whose job is to create a row of n stars.

Bonus: write all of this code without using loops, but instead
using array's .map() and .join() method.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
function square(n) {
  var result = '';
  var counter = 0;
  var row = "";
  while (counter < n) {
    row = row + "*";
    counter++;
  }
  counter = 0;
  while (counter < n){
    result += row + "\n";
    counter++;
  }
  return result;
}

/*
From this function, extract a function pyramidRow(spaces, stars)
where both spaces and stars are numbers,
whose job is to return a string containing the given number of spaces and then the given number of stars.

Bonus: write all of this code without using loops, but instead
using array's .map() and .join() method.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
function pyramid(n) {
  var result = '';
  var counter = 0;
  while (counter < n) {
    var numSpaces = n - 1 - counter;
    var numStars = 1 + 2 * counter;
    var row = '';
    var spacesCounter = 0;
    while (spacesCounter < numSpaces) {
      row = row + ' ';
      spacesCounter = spacesCounter + 1;
    }
    var starsCounter = 0;
    while (starsCounter < numStars) {
      row = row + '*';
      starsCounter = starsCounter + 1;
    }
    result += row + '\n';
    counter = counter + 1;
  }
  return result;
}

/*
Use array's filter method to simplify this function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
function oddNumbers(numbers) {
  var odd = [];
  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (num % 2 === 1) {
      odd.push(num);
    }
  }
  return odd;
}

/*
Use array's map method to simplify this function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
function doubleArray(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

/*
Use array's map method to simplify this function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
function getCardSuits(cards) {
  var suits = [];
  for (var i = 0; i < cards.length; i++) {
    suits.push(cards[i].suit);
  }
  return suits;
}

/*
1. Extract a player variable within the for loop so that we
  don't have to write `players[i]` in 3 separate instances.
2. Rewrite the implementation entirely by:
  1. sorting the array in descending order by avgPoints using the .sort() method
  2. return the first item in the sorted array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
function highestPointAverage(players) {
  var highest = 0;
  var winner;
  for (var i = 0; i < players.length; i++) {
    if (players[i].avgPoints > highest) {
      highest = players[i].avgPoints;
      winner = players[i];
    }
  }
  return winner;
}

/*
Instead of using object literals to create objects inside
the for loop, create a Card constructor that takes point
and suit as parameters. Use the new statement to instantiate
the card objects in the for loop.
*/
function newDeck() {
  var deck = [];
  for (var i = 1; i <= 13; i++) {
    deck.push({ point: i, suit: 'spades' });
    deck.push({ point: i, suit: 'hearts' });
    deck.push({ point: i, suit: 'clubs' });
    deck.push({ point: i, suit: 'diamonds' });
  }
  return deck;
}

/*
Given the Card type created in the previous exercise, move
the logic of the function below into a method of card named:
`.getImageUrl()`. When done, this function (getCardImageUrl)
 should simply return the result of `card.getImageUrl()`.
*/
function getCardImageUrl(card) {
  var cardName;
  if (card.point === 1) {
    cardName = 'ace';
  } else if (card.point === 11) {
    cardName = 'jack';
  } else if (card.point === 12) {
    cardName = 'queen';
  } else if (card.point === 13) {
    cardName = 'king';
  } else {
    cardName = card.point;
  }
  return 'images/' + cardName + '_of_' + card.suit + '.png';
}
