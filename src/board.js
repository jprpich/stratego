class Board {
  constructor(){
    this.pieces = [1,2,3,3,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    this.grid = []  
    this.distributePieces()
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  distributePieces(){
    
    this.shuffle(this.pieces)
    for (let j = 0; j < 4; j++) {
      let subArr = []
      for (let i = 0; i < 10; i++) { 
        subArr.push(this.pieces.pop())
      }
      this.grid.push(subArr)
    }
  }

}

module.exports = Board;