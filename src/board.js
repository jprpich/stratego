const Piece = require("./piece");

class Board {
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;

    this.tiles = []
    this.pieces = [1,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,'F','S','B','B','B','B','B','B',9,9,9,9,9,9,9,9,9,9,9]
    this.createPieces()

    this.tileWidth = 45;
    this.tileHeight = 45;
    this.tilePadding = 10;
    this.tileOffsetTop = 50;
    this.tileOffsetLeft = 50;
    this.previousPiece = null;
    this.previosRow = null;
    this.previousColumn = null;
    this.previousClick = true; 
  }
  
  createPieces(){
    let piece;

    for(var r=0; r<4; r++) {
      this.tiles[r] = [];
      for(var c=0; c<10; c++) {
        piece = new Piece("Player 1", this.pieces.pop(), "white", false)
        this.tiles[r][c] = piece
      }
    }

    for(var r=4; r<6; r++) {
      this.tiles[r] = [];
      for(var c=0; c<10; c++) {
        this.tiles[r][c] = null
      }
    }

    this.pieces = [1,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,'F','S','B','B','B','B','B','B',9,9,9,9,9,9,9,9,9,9,9]
    for(var r=6; r<10; r++) {
      this.tiles[r] = [];
      for(var c=0; c<10; c++) {
        piece = new Piece("Player 2", this.pieces.pop(), "black", false)
        this.tiles[r][c] = piece
      }
    }
  }

  validMove(currentColumn,currentRow, previousRow,previousColumn){
    if(previousColumn != currentColumn && previousRow != currentRow){
      return false;
    }
    if(this.tiles[currentRow][currentColumn] == null && currentRow <= previousRow + 1 && currentRow >= previousRow -1 && currentColumn <= this.previousColumn + 1 && currentColumn >= this.previousColumn - 1){
      return true 
    } else {
      return false;
    }
  }

  render(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawTiles();
  }

  drawTiles(){
    for(var r=0; r<10; r++) {
      for(var c=0; c<10; c++) {
        var tileX = (c*(this.tileHeight+this.tilePadding))+this.tileOffsetTop;
        var tileY = (r*(this.tileWidth+this.tilePadding))+this.tileOffsetLeft;
        this.ctx.beginPath();
        this.ctx.rect(tileX, tileY, this.tileWidth, this.tileHeight);
          
        if(this.tiles[r][c] && this.tiles[r][c].selected){
          this.ctx.fillStyle = "blue"
        } else {
          this.ctx.fillStyle = "red"
        }
                 
        this.ctx.fill();
        if (this.tiles[r][c]){
          this.ctx.fillStyle = this.tiles[r][c].color;
          this.ctx.font = "26px Arial";
          this.ctx.fillText(this.tiles[r][c].rank, tileX+15, tileY+30);
        }
        this.ctx.closePath();        
      }
    }
  }
}

module.exports = Board;