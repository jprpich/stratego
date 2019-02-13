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
      if(this.board.tiles[row][column] && this.board.previousClick){
        this.board.tiles[row][column].selected = true;
        this.board.previousPiece = this.board.tiles[row][column];
        this.board.previousRow = row;
        this.board.previousColumn = column;
        this.board.previousClick = false;
      } else {
        if (this.board.validMove(column, row, this.board.previousRow, this.board.previousColumn )){
          let printMove = () => {
            this.board.tiles[row][column] = this.board.previousPiece;
            this.board.tiles[row][column].selected = false;
            this.board.tiles[this.board.previousRow][this.board.previousColumn] = null;
            this.board.currentPlayer = this.board.currentPlayer === "Player 1" ? "Player 2" : "Player 1"
          }

          // check to see who wins the attack 
          if (this.board.tiles[row][column]) {
            // alert("attacking!")
            if (this.board.tiles[this.board.previousRow][this.board.previousColumn].rank < this.board.tiles[row][column].rank){
              // alert(`${this.board.tiles[this.board.previousRow][this.board.previousColumn].player} wins!`)
              printMove();
            } else {
              // alert(`${this.board.tiles[row][column].player} wins!`)
              this.board.tiles[this.board.previousRow][this.board.previousColumn] = null;
              this.board.tiles[row][column].selected = false;
              this.board.currentPlayer = this.board.currentPlayer === "Player 1" ? "Player 2" : "Player 1"
            }


          } else {
            printMove();
          }

          
        } else {
          this.board.tiles[this.board.previousRow][this.board.previousColumn].selected =  false;
          alert("invalid move")
        }
        this.board.previousClick = true;
      }

      this.board.render();
    })
  }

}

module.exports = Game;