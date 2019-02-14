const Piece = require("./piece");

class Board {
  constructor(ctx, canvas, bomb, flag, captain){
    this.ctx = ctx;
    this.canvas = canvas;
    this.bomb = bomb
    this.flag = flag;
    this.captain = captain;
    this.tiles = []
    this.pieces = ["F",2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,1,'S','B','B','B','B','B','B',9,9,9,9,9,9,9,9,9,9,9]
    this.createPieces()

    this.tileWidth = 70;
    this.tileHeight = 70;
    this.tilePadding = 0;
    this.tileOffsetTop = 0;
    this.tileOffsetLeft = 0;

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

    if ( this.previousPiece.player != this.currentPlayer){
      return false;
    }

    if(previousColumn != currentColumn && previousRow != currentRow){
      return false;
    }

    return (
      (this.currentPiece == null || this.currentPiece.player !== this.currentPlayer) && 
      currentRow <= previousRow + 1 && 
      currentRow >= previousRow -1 && 
      currentColumn <= this.previousColumn + 1 && 
      currentColumn >= this.previousColumn - 1
    )

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
        this.ctx.strokeStyle = "#401b0f";
        this.ctx.stroke();
        if (this.tiles[r][c]){
          if (this.tiles[r][c].val === "B"){
            
            this.ctx.drawImage(this.bomb, tileX+10, tileY+10, 50, 50);
          } else if(this.tiles[r][c].val === "F") {
            this.ctx.drawImage(this.flag, tileX+10, tileY+10, 50, 50);
          } else if(this.tiles[r][c].val === 1){
            this.ctx.fillStyle = this.tiles[r][c].color;
            this.ctx.font = "20px Arial";
            this.ctx.fillText(this.tiles[r][c].val, tileX+5, tileY+20);
            this.ctx.drawImage(this.captain, tileX+10, tileY+10, 70, 70);
          }
          else {
            this.ctx.fillStyle = this.tiles[r][c].color;
            this.ctx.font = "26px Arial";
            this.ctx.fillText(this.tiles[r][c].val, tileX+25, tileY+45);
          }
          
          
        }
        this.ctx.closePath();        
      }
    }
  }

  drawCurrentPlayer(){
    document.getElementsByClassName("player-turn")[0].innerText = this.currentPlayer
  }

}

module.exports = Board;