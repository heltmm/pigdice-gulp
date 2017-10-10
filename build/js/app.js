(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// back-end logic
function Player(player, score, total) {
 this.player = player;
 this.rollScore = score;
 this.rollTotal = total;
}

var player1 = new Player('', 0, 0);
var player2 = new Player('', 0, 0);
var computer = new Player('Summer', 0, 0);

Player.prototype.randomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

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

exports.playerModule = Player;

},{}],2:[function(require,module,exports){
var Player = require('./../js/player.js').playerModule;

$(document).ready(function() {

var player1 = new Player('', 0, 0);
var player2 = new Player('', 0, 0);
var computer = new Player('Summer', 0, 0);

// human form
$('form#dice').submit(function(event) {
  event.preventDefault();
  player1.player = $('input#userName1').val();
  if (player1.player === '') {
    alert("Did you enter a name for player 1?")
    return;
  } else {
    $('#playButton').show();
    $('#optionalPlayer').show();
    $('#name1').append(player1.player);
    $('#playHuman').hide();
    $('#playAI').hide();
  }
});

// AI form
$('#playAI').click(function(event) {
  event.preventDefault();
  player1.player = $('input#userName1').val();
  if (player1.player === '') {
    alert("Did you enter a name for player 1?")
    return;
  } else {
  $('#name1').append(player1.player);
  $("#name2").append(computer.player);
  $('#midRow').show(800);
  $('#colHide').hide();
  }
});

// name form
$('form#dice3').submit(function(event) {
  event.preventDefault();
  player2.player = $('input#userName2').val();
  if (player1.player === '' || player2.player === '') {
    alert("Did you enter a name for both players?")
    return;
  } else {
    $('#midRow').show(800);
    $('#name2').append(player2.player);
    $('#colHide').hide();
  }
});


// player one
$('#rollButton1').click(function(event) {
  event.preventDefault();
  var roll = player1.randomInt(1, 7); //definition of a roll
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
    var roll = player2.randomInt(1, 7); //definition of a roll
    $('#rollResult2').text(roll);
    player2.diceRoll(roll);
    $('#rollScore2').text(player2.rollScore);
    });

  $('#holdButton2').click(function(event) {
    event.preventDefault();
    player2.hold();
    $('#rollTotal2').text(player2.rollTotal);
  });
});

},{"./../js/player.js":1}]},{},[2]);
