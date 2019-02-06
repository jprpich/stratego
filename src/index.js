const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("mycanvas")
  let ctx = canvas.getContext('2d');
  const game = new Game();
  new GameView(game, ctx).start();

});

