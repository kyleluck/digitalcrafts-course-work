/*
## 7. Team

Write a Team type. You use it like so:

```
var team = new Team('Learners');
team.addPlayer(new Player('Cody'));
team.addPlayer(new Player('Sandhya'));
console.log('Team ' + team.name + ' has ' + team.numPlayers() + ' players.');
```
*/

function Team(teamName) {
  this.name = teamName;
  this.players = [];
}

function Player(name) {
  this.name = name;
}

Team.prototype.addPlayer = function (player) {
  this.players.push(player);
};

Team.prototype.numPlayers = function () {
  return this.players.length;
};

var team = new Team('Learners');
team.addPlayer(new Player('Cody'));
team.addPlayer(new Player('Sandhya'));
console.log('Team ' + team.name + ' has ' + team.numPlayers() + ' players.');
console.log(team.players);
