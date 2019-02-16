class Piece{
  constructor(player, val, color, selected){
    this.player = player;
    this.val = val;
    this.rank = 0;
    this.color = color;
    this.selected = selected;
    this.asignRank(val)
  }

  asignRank(val){
    if(val >= 0 && val <= 9){
      this.rank = val;
    }
    if(val === "S"){
      this.rank = 10
    }
  }

}

module.exports = Piece;