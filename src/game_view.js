class GameView {
  constructor(board, ctx){
    this.board = board;
    this.ctx = ctx;
  }

  drawTile(x, y){
    this.ctx.fillStyle = 'brown';
    this.ctx.fillRect(x, y, 40, 40);
  }

  drawPieces(offsetX, offsetY, x, y) {
    let idx1 = ((y-85) / 50);
    let idx2 = ((x-510) / 50);
    if (this.board.selectedIdx1 === idx1 && this.board.selectedIdx2 === idx2){
      this.board.grid[idx1][idx2] = ""
      this.drawPiece('blue', 'white',idx1, idx2, x, y)
    } else if (offsetX >= x -10  && offsetX < x + 30 && offsetY >= y - 5 && offsetY < y + 35 ) {
      if (this.board.selected) {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(x, y, 20, 30);
        this.ctx.fillStyle = 'blue';
        this.ctx.font = "20px Comic Sans MS";
        this.ctx.fillText(this.board.selected,x+5,y+22);
        this.board.grid[idx1][idx2] = this.board.selected;
        this.board.selected = ""
        this.board.selectedIdx1 = ""
        this.board.selectedIdx2 = ""
      } else {
        this.board.selectPiece(idx1, idx2)
        this.drawPiece('white', 'blue',idx1, idx2, x, y)
      }   
    } else {
      this.drawPiece('blue', 'white', idx1, idx2, x, y)
    }

  }

  drawPiece(backgroundColor,textColor,idx1, idx2, x, y){
    this.ctx.fillStyle = backgroundColor;
    this.ctx.fillRect(x, y, 20, 30);
    this.ctx.fillStyle = textColor;
    this.ctx.font = "20px Comic Sans MS";
    this.ctx.fillText(this.board.grid[idx1][idx2],x+5,y+22);
  }

  paintCanvas(offsetX, offsetY){
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

    x = 510;
    y = 85;
    for (let j = 0; j < 6; j++) {
      for (let i = 0; i < 10; i++) {
        this.drawPieces(offsetX, offsetY, x, y);
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
