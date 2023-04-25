function Ship(length) {
  let hits = 0;

  function hit() {
    this.hits++
    if(this.hits >= this.length) return isSunk()
  }

  function isSunk() {
    return true;
  }

  function place(row,col, board) {
    console.log(board[row][col])
    board[row][col] = 'ship'
  };

  return {
    length,
    hits,
    hit,
    isSunk,
    place,
  };
}

module.exports = {Ship}