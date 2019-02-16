const Board = require("./board");
const Game = require("./game");


document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  debugger
  $(".container").imagesLoaded( function() {
    const board = new Board(ctx, canvas)
    new Game(board)
  });
})