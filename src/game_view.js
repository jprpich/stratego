class GameView {
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;
  }

  drawTile(x, y){
    this.ctx.fillStyle = 'brown';
    this.ctx.fillRect(x, y, 40, 40);
  }

  drawCircle(clientX, clientY, x, y) {
    if (clientX >= x - 25 && clientX < x + 25 && clientY >= y - 20 && clientY < y + 20 ) {
      this.ctx.beginPath();
      this.ctx.arc(x,y,15,0,2 * Math.PI);
      this.ctx.stroke();
      this.ctx.fillStyle = 'white';
      this.ctx.fill();
    } else {
      this.ctx.beginPath();
      this.ctx.arc(x,y,15,0,2 * Math.PI);
      this.ctx.stroke();
      this.ctx.fillStyle = 'blue';
      this.ctx.fill();
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

    // create 40 circles 
    x = 520;
    y = 100;
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 10; i++) {
        this.drawCircle(clientX, clientY, x, y);
        x += 50
      }
      x = 520  
      y += 50
    }
  }

  start(){
    // paint the starting canvas
    this.game.sayHello()
    this.paintCanvas()
    const canvas = document.getElementById("mycanvas")
    canvas.addEventListener("click", (e) => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      // repaint the canvas
      this.paintCanvas(e.clientX, e.clientY)
    })
  }

}

module.exports = GameView;
