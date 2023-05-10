function Ship(length) {
  let hits = 0;
  let sunk = false;

  function hit() {
    this.hits++;
    if (this.hits >= this.length) sunk = true;
  }

  function isSunk() {
    if (sunk) return true;
    return false;
  }

  return {
    length,
    hits,
    hit,
    isSunk,
  };
}

module.exports = { Ship };
