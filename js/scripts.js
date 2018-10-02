//Business Logic:
var playerOne = "";
var playerTwo = "";

var dice = function () {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.playerName;
  this.turn = turn;
  this.roll = 0;
  this.score = 0;
  this.totalScore = 0;
}

Player.prototype.rollone = function () {
  if (this.roll === 1) {
    this.score = 0;
    alert("Sorry, " + this.playerName + ", you rolled a 1.\nYour turn is over.")

  } else {
    this.score += this.roll;
  }
}

Player.prototype.hold = function () {
  this.totalScore += this.score;
  this.score = 0;
  alert(this.playerName + ", your turn is over.");
}

Player.prototype.winner = function () {
  if (this.totalScore >= 100) {
    alert(this.playerName + " won!");
  }
}

Player.prototype.restartGame = function () {
  this.roll = 0;
  this.score = 0;
  this.totalScore = 0;
  this.playerName = "";
}

