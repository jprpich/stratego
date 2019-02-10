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
    
    let row = ((y-85) / 50);
    let column = ((x-510) / 50);
    if (this.board.selectedRow === row && this.board.selectedColumn === column){
      
      let nextRow = Math.floor(((offsetY-85) / 50))
      let nextColumn = Math.floor(((offsetX-510) / 50))
      if (this.board.validMove(nextRow, nextColumn,row ,column )) {
        this.board.grid[row][column] = ""
        this.drawPiece('blue', 'white',this.board.grid[row][column], x, y)

      } else {
        this.drawPiece('blue', 'white',this.board.grid[row][column], x, y)
        // this.board.selected = ""
      }
      
    } else if (offsetX >= x -10  && offsetX < x + 30 && offsetY >= y - 5 && offsetY < y + 35 ) {
      
      if (this.board.selected != "") {
        if (this.board.validMove(row, column,this.board.selectedRow, this.board.selectedColumn)){
          this.drawPiece('blue', 'white',this.board.selected, x, y)
          this.board.grid[row][column] = this.board.selected;
          this.board.selected = ""
        } else {
          this.drawPiece('blue', 'white',this.board.grid[row][column], x, y)
          this.board.selected = ""
        }
        
      } else {
        this.board.selectPiece(row, column)
        this.drawPiece('white', 'blue',this.board.grid[row][column], x, y)
      }   
    } else {
      this.drawPiece('blue', 'white', this.board.grid[row][column], x, y)
    }

  } 

  drawPiece(backgroundColor,textColor,val, x, y){
    this.ctx.fillStyle = backgroundColor;
    this.ctx.fillRect(x, y, 20, 30);
    this.ctx.fillStyle = textColor;
    this.ctx.font = "20px Comic Sans MS";
    this.ctx.fillText(val,x+5,y+22);
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
    for (let j = 0; j < 10; j++) {
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
