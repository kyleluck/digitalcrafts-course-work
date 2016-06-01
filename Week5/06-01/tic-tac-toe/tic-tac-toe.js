var app = angular.module('tic-tac-toe', []);
app.controller('TicTacToeController', function($scope) {

  function Square() {
    this.state = null;
  }



  var turn = true;
  $scope.showSquare = function(square) {
    if (turn === true){
      square.state = "O";
      turn = false;
    } else {
      square.state = "X";
      turn = true;
    }
    $scope.checkWinner();
  };

  // Returns true if player occupies all 3 spots specified
  // by (x1, y1), (x2, y2), (x3, y3)
  function check(x1, y1, x2, y2, x3, y3, player) {
    return $scope.squares[x1][y1].state === player &&
           $scope.squares[x2][y2].state === player &&
           $scope.squares[x3][y3].state === player;
  }

  $scope.checkPlayerIsWinner = function(player) {
    if (check(0, 0, 0, 1, 0, 2, player)) return true;
    if (check(1, 0, 1, 1, 1, 2, player)) return true;
    if (check(2, 0, 2, 1, 2, 2, player)) return true;
    if (check(0, 0, 1, 0, 2, 0, player)) return true;
    if (check(0, 1, 1, 1, 2, 1, player)) return true;
    if (check(0, 2, 1, 2, 2, 2, player)) return true;
    if (check(0, 0, 1, 1, 2, 2, player)) return true;
    if (check(2, 0, 1, 1, 0, 2, player)) return true;
  }

  $scope.checkWinner = function() {
    if ($scope.checkPlayerIsWinner('O')) {
      $scope.winner = true;
      $scope.message = "O is the winner";
    } else if ($scope.checkPlayerIsWinner('X')) {
      $scope.winner = true;
      $scope.message = "X is the winner";
    }
  }
  $scope.resetGame= function() {
    $scope.squares = [
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()]
    ];
    $scope.winner = false;
  }
  $scope.resetGame();
});
