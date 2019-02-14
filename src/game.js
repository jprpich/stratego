class Game {
  constructor(board){
    this.board = board;
    this.play();
    this.board.render();
  }

  play(){
    document.addEventListener("click", (e) => {
      let row = Math.floor(((e.offsetY-50) / 55))
      let column = Math.floor(((e.offsetX-50) / 55))
      this.board.currentPiece = this.board.tiles[row][column]

      if(this.board.currentPiece && this.board.previousClick){
        this.selectPiece(row, column);
      } else {
        if (this.board.validMove(row, column, this.board.previousRow, this.board.previousColumn )){
          if (this.board.currentPiece) {
            if(this.board.currentPiece.rank === "F"){
              alert(`${this.board.previousPiece.player} wins!`)
              document.location.reload();
            }           
            if (this.board.previousPiece.rank < this.board.currentPiece.rank){
              this.showWin(row,column,this.board.previousRow, this.board.previousColumn);
            } else {
              this.showLose(this.board.previousRow, this.board.previousColumn);
            }
          } else {
            this.showWin(row,column,this.board.previousRow, this.board.previousColumn);
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

  showWin(row, column, previousRow, previousColumn){
    this.board.tiles[row][column] = this.board.previousPiece;
    this.board.previousPiece.selected = false;
    this.board.tiles[previousRow][previousColumn] = null;
    this.board.currentPlayer = this.board.currentPlayer === "Player 1" ? "Player 2" : "Player 1"
  }

  showLose(previousRow, previousColumn){
    this.board.tiles[previousRow][previousColumn] = null;
    this.board.currentPiece.selected = false;
    this.board.currentPlayer = this.board.currentPlayer === "Player 1" ? "Player 2" : "Player 1"
  }

  selectPiece(row, column){
    this.board.currentPiece.selected = true;
    this.board.previousPiece = this.board.currentPiece;
    this.board.previousRow = row;
    this.board.previousColumn = column;
    this.board.previousClick = false;
  }

}

module.exports = Game;