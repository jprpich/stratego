const Board = require("./board");
const Game = require("./game");


document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  const bomb = document.getElementById("bomb");
  const flag = document.getElementById("flag");
  const captain = document.getElementById("captain");
  const board = new Board(ctx, canvas, bomb, flag, captain)
  new Game(board)

})