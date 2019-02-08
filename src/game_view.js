class GameView {
  constructor(board, ctx){
    this.ctx = ctx;
    this.board = board;
  }

  drawTile(x, y){
    this.ctx.fillStyle = 'brown';
    this.ctx.fillRect(x, y, 40, 40);
  }

  drawPiece(clientX, clientY, x, y) {
    let gridY = ((x-510) / 50);
    let gridX = ((y-85) / 50);
    if (this.board.selectedX === gridX && this.board.selectedY === gridY){
      return;
    } else if (clientX >= x -10  && clientX < x + 30 && clientY >= y - 5 && clientY < y + 35 ) {
      this.board.selectPiece(gridX, gridY)
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(x, y, 20, 30);
      this.ctx.fillStyle = "blue";
      this.ctx.font = "20px Comic Sans MS";
      this.ctx.fillText(this.board.grid[gridX][gridY],x+5,y+22);
    } else {
      this.ctx.fillStyle = 'blue';
      this.ctx.fillRect(x, y, 20, 30);
      this.ctx.fillStyle = "white";
      this.ctx.font = "20px Comic Sans MS";
      this.ctx.fillText(this.board.grid[gridX][gridY],x+5,y+22);
    }
  }

  paintCanvas(clientX, clientY){
    // create 100 tiles 
    let x = 500;
    let y = 80;
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < 10; i++) {
        this.drawTile(x,y);
        x += 50
      }
      x = 500  
      y += 50
    } 

    // create 40 pieces 
    x = 510;
    y = 85;
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 10; i++) {
        this.drawPiece(clientX, clientY, x, y);
        x += 50
      }
      x = 510  
      y += 50
    }
  }

  start(){
    this.paintCanvas()
    const canvas = document.getElementById("mycanvas")
    canvas.addEventListener("click", (e) => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.paintCanvas(e.offsetX, e.offsetY)
    })
  }

}

module.exports = GameView;
