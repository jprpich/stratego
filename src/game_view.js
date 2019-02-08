class GameView {
  constructor(game,board, ctx){
    this.ctx = ctx;
    this.game = game;
    this.board = board;
  }

  drawTile(x, y){
    // debugger
    this.ctx.fillStyle = 'brown';
    this.ctx.fillRect(x, y, 40, 40);
  }

  drawPiece(clientX, clientY, x, y) {
    if (clientX >= x -10  && clientX < x + 30 && clientY >= y - 5 && clientY < y + 35 ) {
      // base on x and y pos figure out index of board.grid 
      // figure out how to print test inside that rectangle 
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(x, y, 20, 30);
      this.ctx.fillStyle = "blue";
      this.ctx.font = "20px Comic Sans MS";
      this.ctx.fillText(this.board.grid[3][2],x+5,y+25);
    } else {
      this.ctx.fillStyle = 'blue';
      this.ctx.fillRect(x, y, 20, 30);
      this.ctx.fillStyle = "white";
      this.ctx.font = "20px Comic Sans MS";
      this.ctx.fillText(this.board.grid[3][2],x+5,y+25);
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
    // paint the starting canvas
    this.game.sayHello()
    this.paintCanvas()
    const canvas = document.getElementById("mycanvas")
    canvas.addEventListener("click", (e) => {
      // debugger
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      // repaint the canvas
      this.paintCanvas(e.offsetX, e.offsetY)
    })
  }

}

module.exports = GameView;
