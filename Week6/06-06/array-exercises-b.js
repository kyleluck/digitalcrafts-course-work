/*
## Leetspeak

Given a paragraph of text as a string, print the paragraph in leetspeak. To translate a string to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase):

```
A => 4
E => 3
G => 6
I => 1
O => 0
S => 5
T => 7
```

Example: LEET => l337

Hint: you can convert a string to an array of characters with .split('')
*/
var paragraph = "Convert me to leet speak please. Programming is fun!";
var uppercaseParagraph = paragraph.toUpperCase();
var paragraphArr = uppercaseParagraph.split('');
var leet = {
  'A': 4,
  'E': 3,
  'G': 6,
  'I': 1,
  'O': 0,
  'S': 5,
  'T': 7
};
var convertedParagraph = paragraphArr.map(function(n) {
  for (var prop in leet) {
    if (n === prop) {
      return leet[prop];
    }
  }
  return n;
});
var final = convertedParagraph.join('');
console.log(final);

/*
## Basketball Players

Given an array of objects representing basketball players:

1. Write a function that takes the players array and returns a new array containing only the starters.
2. Write a function that takes the players array and returns only the point guards (position = 'PG').
3. Write a function that takes the players array and returns a new array containing the names of each player.
4. Write a function that takes the players array and returns a new array
containing the names of the starters.
5. Write a function that takes the players array and returns a new array containing the names of the point guards.
6. Write a function that takes the players array and returns the sum of the avgPoints for each player.
7. Write a function that takes the players array and returns the sum of the avgPoints of the starters.
8. Write a function that takes the players array and returns true if each player gets at leas 10 minutes of average playing time, and returns false otherwise
9. Write a function that takes the players array and returns true if each starter gets at least 30 minutes of average playing time, and returns false otherwise
10. Write a function that takes the players array and returns a tally object. The tally object should count the number of players in each position. It should look like:

        {
          PG: 2,
          SG: 4,
          PF: 3,
          SF: 3,
          C: 1
        }
*/
var players = [
  {
    name: 'Paul Millsap',
    position: 'PF',
    avgMinutesPlayed: 36,
    avgPoints: 16.4,
    avgRebounds: 9.4,
    starter: true
  },
  {
    name: 'Jeff Teague',
    position: 'PG',
    avgMinutesPlayed: 28.6,
    avgPoints: 15.6,
    avgRebounds: 1.9,
    starter: true
  },
  {
    name: 'Al Horford',
    position: 'C',
    avgMinutesPlayed: 32,
    avgPoints: 13.2,
    avgRebounds: 6.8,
    starter: true
  },
  {
    name: 'Kent Bazemore',
    position: 'SF',
    avgMinutesPlayed: 31.8,
    avgPoints: 12,
    avgRebounds: 6.6,
    starter: true
  },
  {
    name: 'Kyle Korver',
    position: 'SG',
    avgMinutesPlayed: 32.4,
    avgPoints: 11.2,
    avgRebounds: 4.9,
    starter: true
  },
  {
    name: 'Dennis Schroder',
    position: 'PG',
    avgMinutesPlayed: 18.3,
    avgPoints: 10.7,
    avgRebounds: 1.8,
    starter: false
  },
  {
    name: 'Kris Humphries',
    position: 'PF',
    avgMinutesPlayed: 14.7,
    avgPoints: 9.7,
    avgRebounds: 5.7,
    starter: false
  },
  {
    name: 'Mike Scott',
    position: 'PF',
    avgMinutesPlayed: 17.6,
    avgPoints: 7.0,
    avgRebounds: 3.6,
    starter: false
  },
  {
    name: 'Thabo Sefolosha',
    position: 'SF',
    avgMinutesPlayed: 18.9,
    avgPoints: 4.8,
    avgRebounds: 3.9,
    starter: false
  },
  {
    name: 'Mike Muscala',
    position: 'PF',
    avgMinutesPlayed: 7.4,
    avgPoints: 2.7,
    avgRebounds: 1.9,
    starter: false
  },
  {
    name: 'Tim Hardaway Jr.',
    position: 'SG',
    avgMinutesPlayed: 9.7,
    avgPoints: 2.2,
    avgRebounds: 1.0,
    starter: false
  },
  {
    name: 'Lamar Patterson',
    position: 'SG',
    avgMinutesPlayed: 5.0,
    avgPoints: 1.5,
    avgRebounds: 1.3,
    starter: false
  },
  {
    name: 'Kirk Hinrich',
    position: 'SG',
    avgMinutesPlayed: 4.5,
    avgPoints: 0.8,
    avgRebounds: 0.7,
    starter: false
  }
];
//1. Write a function that takes the players array and returns a new array containing only the starters.
var starters = players.filter(function(player) {
  return player.starter;
});
console.log('Starters ', starters);

//2. Write a function that takes the players array and returns only the point guards (position = 'PG').
var pointGuards = players.filter(function(player) {
  return player.position === 'PG';
});
console.log('Point Guards: ', pointGuards);

//3. Write a function that takes the players array and returns a new array containing the names of each player.
var playerNames = players.map(function(player) {
  return player.name;
});
console.log('Player names are: ', playerNames);

//4. Write a function that takes the players array and returns a new array containing the names of the starters.
var starterNames = players.filter(function(player) {
  return player.starter;
}).map(function(player) {
  return player.name;
});
console.log('Starter names are: ', starterNames);

//5. Write a function that takes the players array and returns a new array containing the names of the point guards.
var pgNames = players.filter(function(player) {
  return player.position === 'PG';
}).map(function(player) {
  return player.name;
});
console.log('PG names are ', pgNames);

//6. Write a function that takes the players array and returns the sum of the avgPoints for each player.
var avgPointsSum = players.reduce(function(sum, player) {
  return sum + player.avgPoints;
}, 0);
console.log('Average Points Sum :', avgPointsSum.toFixed(2));

//7. Write a function that takes the players array and returns the sum of the avgPoints of the starters.
var avgPointsStarters = players.reduce(function(sum, player) {
  if (player.starter === true) {
    return sum + player.avgPoints;
  } else {
    return sum;
  }
}, 0);
console.log('Average Points for Starters is: ', avgPointsStarters.toFixed(2));

/*
8. Write a function that takes the players array and returns true if each player gets at least 10 minutes of average playing time, and returns false otherwise
*/
function gets10Minutes(element, index, array) {
  return element.avgMinutesPlayed >= 10;
}
var playersGet10 = players.every(gets10Minutes);
console.log(playersGet10);

/*
9. Write a function that takes the players array and returns true if each starter gets at least 30 minutes of average playing time, and returns false otherwise
*/
var starters = players.filter(function(player) {
  return player.starter;
});
function gets30Minutes(element, index, array) {
  return element.avgMinutesPlayed >= 30;
}
var startersGet30 = starters.every(gets30Minutes);
console.log(startersGet30);

/*
10. Write a function that takes the players array and returns a tally object. The tally object should count the number of players in each position. It should look like:

        {
          PG: 2,
          SG: 4,
          PF: 3,
          SF: 3,
          C: 1
        }
*/
function tallyPlayersPositions(player) {
  tally[player.position]++;
}
var tally = {
  PG: 0,
  SG: 0,
  PF: 0,
  SF: 0,
  C: 0
};
var buildTally = players.map(tallyPlayersPositions);
console.log(tally);
