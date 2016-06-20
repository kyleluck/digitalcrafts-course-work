
/*
Simplify the if statement in this function.

Hint 1: combine multiple conditionals into a compound conditional
Hint 2: test for a range of numbers
*/
function workOrSleepIn(day) {
  if (day === 0 || day === 6) {
    return 'Sleep In';
  } else if (day >= 1 && day <= 5) {
    return 'Work';
  } else {
    throw new Error('Invalid day: ' + day);
  }
}

/*
Simplify the if statement in this function.

Hint 1: merge multiple conditions using the || operator
Hint 2: cover rest of the cases using an else clause
*/
function daysInMonth(month) {

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      throw new Error('Invalid month: ' + month);
  }

  /* OR
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    return 31;
  } else if (month === 2) {
    return 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    throw new Error('Invalid month: ' + month);
  } */

}

/*
Simplify the code in the function below to the bare minimal required to pass the tests.

Hint 1: extract an expression that's used multiple times as an expression.
Hint 2: eliminate the `theIcon` variable by simply returning a value inside each else if or else clause. (Add an else clause)
Hint 3: would changing the order of the if clauses reduce the amount of code necessary?
Hint 4: Is there unnecesary code in this function?
*/
function getIcon(place) {
  var avgRating = place.avgRating;
  if (avgRating >= 4) {
    return 'images/green.png';
  } else if (avgRating < 2) {
    return 'images/red.png';
  } else {
    return 'images/orange.png';
  }
}

/*
Simplify the body of the for loop below.

Hint 1: Extracting an expression within the for loop that is used multiple times as a variable.
Bonus: rewrite the for loop using array's reduce method.
*/
function tallyGrades(students) {
  var tally = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
  };
  return students.reduce(function(tally, student) {
    var grade = student.grade;
    if (grade >= 90) {
      tally.A++;
    } else if (grade >= 80) {
      tally.B++;
    } else if (grade >= 70) {
      tally.C++;
    } else if (grade >= 60) {
      tally.D++;
    } else {
      tally.F++;
    }
    return tally;
  }, {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
  });

  // for (var i = 0; i < students.length; i++) {
  //   var grade = students[i].grade;
  //   if (grade >= 90) {
  //     tally.A++;
  //   } else if (grade >= 80) {
  //     tally.B++;
  //   } else if (grade >= 70) {
  //     tally.C++;
  //   } else if (grade >= 60) {
  //     tally.D++;
  //   } else {
  //     tally.F++;
  //   }
  // }
  // return tally;
}

/*
Simplify the following function by reducing duplication.

Hint 1: Extract a function perhaps called squareOfDifference that takes two numbers and returns there difference squared. Reused the function twice, once for the x case and once for y.
Hint 2: In the calculation for squareOfDifference, extract a variable diff.
*/
function distance(point1, point2) {
  var distance = Math.sqrt(
    squareOfDifference(point1.x, point2.x) +
    squareOfDifference(point1.y, point2.y)
  );
  return distance;
}

function squareOfDifference(point1, point2) {
  var diff = point1 - point2;
  return diff * diff;
}

/*
Simplify the function below by extracting a function that can be reused across both attacks

Hint/Option 1: Extract a function, perhaps called getHitPoints that takes in a character and returns the number of hit points it will induce on the other character.
Hint/Option 2: Instead of option 1, extract a function, perhaps called attack, which both calculates the hit points and induces the damage on the other character.
*/
function fight(human, goblin) {
  goblin.health -= getHitPoints(human, 0.5);
  human.health -= getHitPoints(goblin, 0.2);
}

function getHitPoints(character, percent) {
  var hitPoints = character.power;
  if (Math.random() > percent) {
    hitPoints = hitPoints * 2;
  }
  return hitPoints;
}


/*
This function determines the winner of a roshambo game, a.k.a
rock paper sissors. It takes in 2 parameters:

* the throw of player 1, one of "rock", "paper", or "sissors"
* the throw of player 2, one of "rock", "paper", or "sissors"

If player 1 wins, the function returns "player 1", if player 2 wins, it returns "player 2". If it's a draw, it returns "draw".

What is the shorter (shortest) way to write this function?

Hint 1: the logic for whether one player beats another player can be reused. Write a function beats(aPlayer, anotherPlayer) which returns whether aPlayer beats anotherPlayer. And then use this function twice: beats(player1, player2), and beats(player2, player1).
Hint 2: do you even need to call the beats function twice? You can use an else statement to cover the rest of the cases.
*/
function roshambo(player1, player2) {
  var winner = beats(player1, player2);
  if (player1 === player2) {
    return 'draw';
  } else if (winner){
    return 'player 1';
  } else {
    return 'player 2';
  }
}

function beats(player1, player2) {
  if (player1 === 'rock' && player2 === 'sissors') {
    return true;
  } else if (player1 === 'sissors' && player2 === 'paper') {
    return true;
  } else if (player1 === 'paper' && player2 === 'rock') {
    return true;
  } else {
    return false;
  }
}


/*
1. Instead of using object literals to create objects inside
the for loop, create a Card constructor that takes point
and suit as parameters. Use the new statement to instantiate
the card objects in the for loop.
*/

function newDeck() {
  var deck = [];
  for (var i = 1; i <= 13; i++) {
    deck.push(new Card(i, 'spades'));
    deck.push(new Card(i, 'hearts'));
    deck.push(new Card(i, 'clubs'));
    deck.push(new Card(i, 'diamonds'));
  }
  return deck;
}

function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

/*
Bonus Challenge: Tic Tac Toe

Un-suck this code.
*/

function ticTacToe(board) {

  var xHortizontal = checkHorizontal('X', board);
  var oHortizontal = checkHorizontal('O', board);
  var xVertical = checkVertical('X', board);
  var oVertical = checkVertical('O', board);
  var xDiagonal = checkDiagonal('X', board);
  var oDiagonal = checkDiagonal('O', board);

  if (xHortizontal || xVertical || xDiagonal) {
    return 'X';
  } else if (oHortizontal || oVertical || oDiagonal) {
    return 'O';
  } else {
    // no winner
    return null;
  }
}

function checkHorizontal(xOrO, board) {
  // horizontal rows
  if (board[0][0] === xOrO && board[0][1] === xOrO && board[0][2] === xOrO) {
    return true;
  }
  if (board[1][0] === xOrO && board[1][1] === xOrO && board[1][2] === xOrO) {
    return true;
  }
  if (board[2][0] === xOrO && board[2][1] === xOrO && board[2][2] === xOrO) {
    return true;
  }
  return false;
}
function checkVertical(xOrO, board) {
  // vertical rows
  if (board[0][0] === xOrO && board[1][0] === xOrO && board[2][0] === xOrO) {
    return true;
  }
  if (board[0][1] === xOrO && board[1][1] === xOrO && board[2][1] === xOrO) {
    return true;
  }
  if (board[0][2] === xOrO && board[1][2] === xOrO && board[2][2] === xOrO) {
    return true;
  }
  return false;
}
function checkDiagonal(xOrO, board) {
  // diagnals
  if (board[0][0] === xOrO && board[1][1] === xOrO && board[2][2] === xOrO) {
    return true;
  }
  if (board[0][2] === xOrO && board[1][1] === xOrO && board[2][0] === xOrO) {
    return true;
  }
  return false;
}
// function ticTacToe(board) {
//   // horizontal rows
//   if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') {
//     return 'O';
//   }
//   if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') {
//     return 'O';
//   }
//   if (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') {
//     return 'O';
//   }
//   if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
//     return 'X';
//   }
//   if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
//     return 'X';
//   }
//   if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
//     return 'X';
//   }
//
//   // vertical rows
//   if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
//     return 'O';
//   }
//   if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
//     return 'O';
//   }
//   if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
//     return 'O';
//   }
//   if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
//     return 'X';
//   }
//   if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
//     return 'X';
//   }
//   if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
//     return 'X';
//   }
//
//   // diagnals
//   if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
//     return 'O';
//   }
//   if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
//     return 'O';
//   }
//   if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
//     return 'X';
//   }
//   if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
//     return 'X';
//   }
//
//   // no winner
//   return null;
//}
