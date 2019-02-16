class Game {
  constructor(board){
    this.board = board;
    this.play();
    this.board.render();
  }

  play(){
    document.addEventListener("click", (e) => {
      let row = Math.floor(((e.offsetY) / 70))
      let column = Math.floor(((e.offsetX) / 70))
      this.board.currentPiece = this.board.tiles[row][column]

      if(this.board.currentPiece && this.board.previousClick){
        this.selectPiece(row, column);
      } else {
        if (this.board.validMove(row, column)){
          if (this.board.currentPiece) {
            if(this.board.currentPiece.val === "F"){
              alert(`${this.board.previousPiece.player} wins!`)
              document.location.reload();
            }           
            if ((this.board.previousPiece.rank < this.board.currentPiece.rank) || this.detonateBomb() || this.defeatMarshal()){
              this.showWin(row,column);
            } else if(this.board.previousPiece.rank === this.board.currentPiece.rank){
              this.showTie(row,column)
            } 
            else {
              this.showLose();
            }
          } else {
            this.showWin(row,column);
          }
        } else {
          this.board.previousPiece.selected =  false;
          document.getElementById("game-messages").innerText = "Invalid Move"
        }

        this.board.previousClick = true;
      }

      this.board.render();
    })
  }

  detonateBomb(){
    return this.board.previousPiece.rank === 8 && this.board.currentPiece.val === "B";
  }

  defeatMarshal(){
    return this.board.previousPiece.val === "S" && this.board.currentPiece.val === 1;
  }

  showTie(row, column){
    document.getElementById("game-messages").innerText = `${this.board.currentPiece.val} has been traded for ${this.board.previousPiece.val}`
    this.clearPiece();
    this.board.tiles[row][column] = null;
    this.board.currentPiece.selected = false;
    this.switchPlayer();
  }

  showWin(row, column){
    if(this.board.currentPiece){
      document.getElementById("game-messages").innerText = `${this.board.previousPiece.val} has defeated ${this.board.currentPiece.val}`
    } else {
      document.getElementById("game-messages").innerText = "";
    }
    
    this.board.tiles[row][column] = this.board.previousPiece;
    this.board.previousPiece.selected = false;
    this.clearPiece();
    this.switchPlayer();
  }

  showLose(){
    document.getElementById("game-messages").innerText = `${this.board.currentPiece.val} has defeated ${this.board.previousPiece.val}`
    this.clearPiece();
    this.board.currentPiece.selected = false;
    this.switchPlayer();
  }

  selectPiece(row, column){
    this.board.currentPiece.selected = true;
    this.board.previousPiece = this.board.currentPiece;
    this.board.previousRow = row;
    this.board.previousColumn = column;
    this.board.previousClick = false;
  }

  clearPiece(){
    this.board.tiles[this.board.previousRow][this.board.previousColumn] = null;
  }

  switchPlayer(){
    this.board.currentPlayer = this.board.currentPlayer === "Player 1" ? "Player 2" : "Player 1"
  }

}

module.exports = Game;