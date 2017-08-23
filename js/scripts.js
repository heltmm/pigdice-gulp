// back-end logic
function Player(player, score, total) {
 this.player = player;
 this.rollScore = score;
 this.rollTotal = total;
}

var player1 = new Player("player1", 0, 0);
// var player2 = new Player('Player2', 0, 0);

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

Player.prototype.diceRoll = function(roll) {
  console.log(roll)
  if (roll === 1) {
    this.rollScore = 0;

  } else {
    this.rollScore += roll;
    $('#rollScore').text(this.rollScore);
  }
};

// Player.prototype.hold = function() {
//   this.rollTotal += this.rollScore;
//   this.rollScore = 0;
//   return this.rollTotal;
// }

// front-end logic
$(document).ready(function() {
  $('#rollButton').click(function(event) {
    event.preventDefault();

  var roll = randomInt(1, 7);

  $('#rollResult').text(roll);

  player1.diceRoll(roll);

  $('#rollTotal').text(player1.rollTotal);
  });
});
