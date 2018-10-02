# PIG DICE GAME
  This is a program where two users can play the Pig Dice game against each other and determine a winner accordingly.

#### v1, as of, 2nd October, 2018

## BY: **SHARON IVY KENDI M.**

## DESCRIPTION:
**Game Play:**
  Pig dice game is played with a single six-sided die and players are allowed to make any number of rolls in each turn. After each roll the dice value is added to their score for that turn. After each roll player can decide whether to stop rolling and claim the total turn score or continue rolling. If they roll a 1 then they lose all points scored in a particular turn and turn is then passed to the opponent. This has no impact on their overall score. If players decide to stop rolling, they get the points scored so far which is added to their overall score.

  The first player to score 100 points (or any other predetermined score at the beginning of the game) wins the game.

## SPECIFICATIONS
  (using Behaviour Driven Development)
  I. If the player rolls a 1, they score nothing and it becomes the next player's turn.


  II. If the player rolls any other number, it is added to their turn total and the player's turn continues.


  III. If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.


  IV. The first player to score 100 or more points wins.

   **Combined input abd output Example:**
   The first player, X, begins a turn with a roll of 5. X could hold and score 5 points, but chooses to roll again. X rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. X rolls a 1, and must end his/her turn without scoring. The next player, Y, rolls the sequence 4-5-3-5-5, after which he/she chooses to hold, and adds his/her turn total of 22 points to his/her score.

##RUNNING THE TESTS
  The program should achieve the following basic functions when it runs:
    *The player can roll the dice.
    *Show's both player's results after taking turns
    *Clears previous results before your new results are shown/displayed

## PROJECT SETUP REQUIREMENTS:
  * Fork this repository.
  * Run the command;
    'git clone https://github.com/SharonIvy/javascript-quiz.git' to clone.

## LINK TO LIVE SITE ON GITHUB PAGES
  https://sharonivy.github.io/pig-dice/

## KNOWN BUGS:
  Using the enter key will not input data.

## TECHNOLOGIES USED:
  JavaScript

  HTML

  CSS

  Bootstrap

  jQuery

## LICENSE:
  MIT License

  Copyright (c) 2018 **Sharon Ivy Kendi M.**

## Support and contact details:
  e-mail address; kendishivy72@gmail.com