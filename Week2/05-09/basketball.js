/*
## Basketball Players

Given an array of basketball players stored as JavaScript objects:

* Print the average playing time of the players.
* Print the average playing time of the starters.
* Print the average playing time of the bench players.
* Create an array of the names of each player.
* Create an array of the names of the players who average more than 10 points per game.
* Create an array of the names of the players who average more than 5 rebounds per game.
* Who is the player with the most points per minute played? Write a program to find that out.
* Based on this data, what is the average points score for the team as a whole?
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

var averagePlayingTime = 0;
var averagePlayingTimeStarters = 0;
var averagePlayingTimeBenched = 0;
var numberOfPlayers = players.length;
var sumPlayingTime = 0;
var sumStarterTime = 0;
var numberOfStarters = 0;
var numberOfBenched = 0;
var sumBenchedTime = 0;
var playerNames = [];
var namesMoreThanTen = [];
var namesMoreThanFive = [];
var mostPointsPerMinute = 0;
var mostPointsPerMinuteName = "";
var pointsPerMinute = 0;
var avgPointsWholeTeam = 0;

for (var i = 0; i < numberOfPlayers; i++) {
  //Print the average playing time of the players.
  sumPlayingTime += players[i].avgMinutesPlayed;

  if(players[i].starter) {
    //average playing time of starters
    numberOfStarters++;
    sumStarterTime += players[i].avgMinutesPlayed;
  }
  else {
    //average playing time of the bench players
    numberOfBenched++;
    sumBenchedTime += players[i].avgMinutesPlayed;
  }

  //Create an array of the names of each player.
  playerNames.push(players[i].name);

  //Create an array of the names of the players who average more than 10 points per game.
  if (players[i].avgPoints > 10) {
    namesMoreThanTen.push(players[i].name);
  }

  //Create an array of the names of the players who average more than 5 rebounds per game.
  if (players[i].avgRebounds > 5) {
    namesMoreThanFive.push(players[i].name);
  }

  //Who is the player with the most points per minute played? Write a program to find that out.
  var pointsPerMinute = players[i].avgPoints / players[i].avgMinutesPlayed;
  if (pointsPerMinute > mostPointsPerMinute) {
    mostPointsPerMinute = pointsPerMinute;
    mostPointsPerMinuteName = players[i].name;
  }

  //Based on this data, what is the average points score for the team as a whole
  avgPointsWholeTeam += players[i].avgPoints;
}
averagePlayingTime = sumPlayingTime / numberOfPlayers;
averagePlayingTimeStarters = sumStarterTime / numberOfStarters;
averagePlayingTimeBenched = sumBenchedTime / numberOfBenched;

console.log("Average playing time is: " + averagePlayingTime);
console.log("Average playing time for starters is: " + averagePlayingTimeStarters);
console.log("Average playing time for benched is: " + averagePlayingTimeBenched);
console.log("Player names are: " + playerNames);
console.log("Players who average more than 10 pts per game are: " + namesMoreThanTen);
console.log("Players who average more than 5 rebounds per game are: " + namesMoreThanFive);
console.log("The player with the most points per minute played is: " + mostPointsPerMinuteName);
console.log("The average points score for the whole team is " + avgPointsWholeTeam);
