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
            if (this.board.previousPiece.rank < this.board.currentPiece.rank){
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
          alert("invalid move")
        }

        this.board.previousClick = true;
      }

      this.board.render();
    })
  }

  showTie(row, column){
    this.clearPiece();
    this.board.tiles[row][column] = null;
    this.board.currentPiece.selected = false;
    this.switchPlayer();
  }

  showWin(row, column){
    this.board.tiles[row][column] = this.board.previousPiece;
    this.board.previousPiece.selected = false;
    this.clearPiece();
    this.switchPlayer();
  }

  showLose(){
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