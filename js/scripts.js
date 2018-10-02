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

//User Interface:
$(document).ready(function () {

  $("button#startButton").click(function (event) {
    playerOne = new Player(true);
    playerTwo = new Player(false);
    $(".console").show();
    $(".start").hide();

    var playerOneName = $(".playerOneName").val();
    $("#playerOneName").text(playerOneName);

    var playerTwoName = $(".playerTwoName").val();
    $("#playerTwoName").text(playerTwoName);

    playerOne.playerName = playerOneName;
    playerTwo.playerName = playerTwoName;

  });
  $("button#restartGame").click(function (event) {
    $(".console").hide();
    $(".start").show();
    clearValues();
    playerOne.restartGame();
    playerTwo.restartGame();
    $("#playerOneRoundTotal").empty();
    $("#playerOneTotalScore").empty();
    $("#playerOneDiceRoll").empty();
    $("#playerTwoRoundTotal").empty();
    $("#playerTwoTotalScore").empty();
    $("#playerTwoDiceRoll").empty();
  });

  $("button#playerOneRoll").click(function (event) {
    playerOne.roll = dice();
    $("#playerOneDiceRoll").text(playerOne.roll);
    playerOne.rollone();
    $("#playerOneRoundTotal").text(playerOne.score);
  });

  $("button#playerTwoRoll").click(function (event) {
    playerTwo.roll = dice();
    $("#playerTwoDiceRoll").text(playerTwo.roll);
    playerTwo.rollone();
    $("#playerTwoRoundTotal").text(playerTwo.score);
  });

  $("button#playerOneHold").click(function (event) {
    playerOne.hold();
    $("#playerOneTotalScore").text(playerOne.totalScore);
    $("#playerOneRoundTotal").empty();
    $("#playerOneDiceRoll").empty();
    playerOne.winner();
  });

  $("button#playerTwoHold").click(function (event) {
    playerTwo.hold();
    $("#playerTwoTotalScore").text(playerTwo.totalScore);
    $("#playerTwoRoundTotal").empty();
    $("#playerTwoDiceRoll").empty();
    playerTwo.winner();
  });

});