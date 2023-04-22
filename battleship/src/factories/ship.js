function Ship(length) {
  const hits = Array(length).fill(false);

  function hit(position) {
    if (position >= length || position < 0) {
      throw new Error('Invalid position');
    }
    hits[position] = true;
  }

  function isSunk() {
    return hits.every((hit) => hit);
  }

  function place(occupiedCoords, startRow, startCol, board) {
    occupiedCoords.forEach(coord => {
      const [row, col] = coord;
      board[row][col] = this;
      hits[row - startRow][col - startCol] = false;
    });
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