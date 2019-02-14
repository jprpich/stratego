const Piece = require("./piece");

class Board {
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;

    this.tiles = []
    this.pieces = ["F",2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,1,'S','B','B','B','B','B','B',9,9,9,9,9,9,9,9,9,9,9]
    this.createPieces()

    this.tileWidth = 45;
    this.tileHeight = 45;
    this.tilePadding = 10;
    this.tileOffsetTop = 50;
    this.tileOffsetLeft = 50;

    this.previousPiece = null;
    this.previosRow = null;
    this.previousColumn = null;

    this.currentPiece = null;
    this.currentRow = null;
    this.currentColumn = null;

    this.previousClick = true; 

    this.currentPlayer = "Player 1";
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }
  
  createPieces(){
    let piece;
    this.shuffle(this.pieces);
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

    this.pieces = [9,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,9,'S','B','B','B','B','B','B',9,9,9,9,9,9,9,9,9,"F",1]
    this.shuffle(this.pieces)
    for(var r=6; r<10; r++) {
      this.tiles[r] = [];
      for(var c=0; c<10; c++) {
        piece = new Piece("Player 2", this.pieces.pop(), "#401b0f", false)
        this.tiles[r][c] = piece
      }
    }
  }

  validMove(currentRow, currentColumn, previousRow, previousColumn){

    const previousPlayer = this.tiles[previousRow][previousColumn].player
    let nextPlayer;

    if (this.tiles[currentRow][currentColumn]){
      nextPlayer = this.tiles[currentRow][currentColumn].player
    }
    
    if ( previousPlayer != this.currentPlayer){
      return false;
    }

    if(previousColumn != currentColumn && previousRow != currentRow){
      return false;
    }

    if((this.tiles[currentRow][currentColumn] == null || nextPlayer !== this.currentPlayer) && currentRow <= previousRow + 1 && currentRow >= previousRow -1 && currentColumn <= this.previousColumn + 1 && currentColumn >= this.previousColumn - 1){
      return true 
    } else {
      return false;
    }
  }

  render(){
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    var grd = this.ctx.createLinearGradient(0, 0, 890, 0);
    grd.addColorStop(0, "#ccb16b");
    grd.addColorStop(1, "#8a9d52");
    this.ctx.fillStyle = grd;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawTiles();
    this.drawCurrentPlayer();
  }

  drawTiles(){
    for(var r=0; r<10; r++) {
      for(var c=0; c<10; c++) {
        var tileX = (c*(this.tileHeight+this.tilePadding))+this.tileOffsetTop;
        var tileY = (r*(this.tileWidth+this.tilePadding))+this.tileOffsetLeft;
        this.ctx.beginPath();
        this.ctx.rect(tileX, tileY, this.tileWidth, this.tileHeight);
          
        if(this.tiles[r][c] && this.tiles[r][c].selected){
          this.ctx.fillStyle = "#c9af74"
        } else {
          this.ctx.fillStyle = "#c7433d"
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

  drawCurrentPlayer(){
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "#401b0f";
    this.ctx.fillText(this.currentPlayer + "'s Turn!", 20, 30);
  }

}

module.exports = Board;