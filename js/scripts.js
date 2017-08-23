// back-end logic
function Player(player, score, total) {
 this.player = player;
 this.rollScore = score;
 this.rollTotal = total;
}

var player1 = new Player("Player1", 0, 0);
var player2 = new Player('Player2', 0, 0);

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

Player.prototype.diceRoll = function(roll) {
  console.log(roll)
  if (roll === 1) {
    this.rollScore = 0;
  $('.player1, .player2').toggle();
  } else {
    this.rollScore += roll;
  }
};

Player.prototype.hold = function() {
  this.rollTotal += this.rollScore;
  this.rollScore = 0;
  if (this.rollTotal >= 100)
    alert('You win ' + this.player + '!')
    $('.player1, .player2').toggle();
}



// front-end logic
$(document).ready(function() {
// player one
$('#rollButton1').click(function(event) {
  event.preventDefault();
  var roll = randomInt(1, 7); //definition of a roll
  $('#rollResult1').text(roll);
  player1.diceRoll(roll);
  $('#rollScore1').text(player1.rollScore);
  });

  $('#holdButton1').click(function(event) {
    event.preventDefault();
    player1.hold();
    $('#rollTotal1').text(player1.rollTotal);
  });

// player two
  $('#rollButton2').click(function(event) {
    event.preventDefault();
    var roll = randomInt(1, 7); //definition of a roll
    $('#rollResult2').text(roll);
    player1.diceRoll(roll);
    $('#rollScore2').text(player1.rollScore);
    });

    $('#holdButton2').click(function(event) {
      event.preventDefault();
      player1.hold();
      $('#rollTotal2').text(player1.rollTotal);
    });
});
