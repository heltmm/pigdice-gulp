// back-end logic
function Player(player, score, total) {
 this.player = player;
 this.rollScore = score;
 this.rollTotal = total;
}

Integer.prototype.randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

Player.prototype.diceRoll = function(roll) {
  if (roll === 1) {
    this.rollScore = 0;
    $('#rollResult1, #rollResult2').toggle();
    $('#rollButton1, #rollButton2').toggle();
    $('#holdButton1, #holdButton2').toggle();
  } else {
    this.rollScore += roll;
  }
};

Player.prototype.hold = function() {
  this.rollTotal += this.rollScore;
  this.rollScore = 0;
  if (this.rollTotal >= 100)
    alert('You win ' + this.player + '!')
    $('#rollResult1, #rollResult2').toggle();
    $('#rollButton1, #rollButton2').toggle();
    $('#holdButton1, #holdButton2').toggle();
}

exports.pigdiceModule = Pigdice;
