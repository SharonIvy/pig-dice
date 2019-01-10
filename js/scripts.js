//BUSINESS LOGIC


var playerOne = "";
var playerTwo = "";

var dice = function () {
  return Math.floor(6 * Math.random()) + 1;
}

//PLAYER CONSTRUCTOR:
function Player(turn) {
  this.playerName;
  this.turn = turn;
  this.roll = 0;
  this.score = 0;
  this.totalScore = 0;
}

//PLAYER PROTOTYPE:
//Functionality for if the player rolls a 1;
Player.prototype.rollone = function () {
  if (this.roll === 1) {
    this.score = 0;
    alert("Sorry, " + this.playerName + ", you rolled a 1.\nYour turn is over.")

  } else {
    this.score += this.roll;
  }
}
//Functionality for if the player chooses to hold;
Player.prototype.hold = function () {
  this.totalScore += this.score;
  this.score = 0;
  alert(this.playerName + ", your turn is over.");
}
//Functionality for if the player wins;
Player.prototype.winner = function () {
  if (this.totalScore >= 100) {
    alert(this.playerName + " won!");
  }
}




//USER INTERFACE


$(document).ready(function () {

  //START BUTTON FUNCTION:
  $("button#startButton").click(function (event) {
    playerOne = new Player(true);
    playerTwo = new Player(false);
    //Hide and show start and console pages respectively onclick;
    $(".console").show();
    $(".start").hide();

    var playerOneName = $(".playerOneName").val();
    $("#playerOneName").text(playerOneName);

    var playerTwoName = $(".playerTwoName").val();
    $("#playerTwoName").text(playerTwoName);

    playerOne.playerName = playerOneName;
    playerTwo.playerName = playerTwoName;

  });

  //RESTART BUTTON FUNCTION:
  $("button#restartGame").click(function (event) {
    //Hide and show console and start pages respectively onclick;
    $(".console").hide();
    $(".start").show();
    location.reload();
  });

  //ROLL FUNCTION:
  //Player one;
  $("button#playerOneRoll").click(function (event) {
    playerOne.roll = dice();
    $("#playerOneDiceRoll").text(playerOne.roll);
    playerOne.rollone();
    $("#playerOneRoundTotal").text(playerOne.score);
  });
  //Player two;
  $("button#playerTwoRoll").click(function (event) {
    playerTwo.roll = dice();
    $("#playerTwoDiceRoll").text(playerTwo.roll);
    playerTwo.rollone();
    $("#playerTwoRoundTotal").text(playerTwo.score);
  });

  //HOLD AND WIN FUNCTION:
  //Player one;
  $("button#playerOneHold").click(function (event) {
    playerOne.hold();
    $("#playerOneTotalScore").text(playerOne.totalScore);
    $("#playerOneRoundTotal").empty();
    $("#playerOneDiceRoll").empty();
    playerOne.winner();
  });
  //Player two;
  $("button#playerTwoHold").click(function (event) {
    playerTwo.hold();
    $("#playerTwoTotalScore").text(playerTwo.totalScore);
    $("#playerTwoRoundTotal").empty();
    $("#playerTwoDiceRoll").empty();
    playerTwo.winner();
  });

});