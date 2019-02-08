const Game = require("./game");
const GameView = require("./game_view");
const Board = require("./board");

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("mycanvas")
  let ctx = canvas.getContext('2d');
  const game = new Game();
  const board = new Board();
  new GameView(game,board, ctx).start();

});

