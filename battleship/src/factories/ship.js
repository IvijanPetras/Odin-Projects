function Ship(length) {
  let hits = 0
  let sunk = false

  function hit() {
    this.hits++
    if(this.hits >= this.length) return this.sunk = true
  }

 

  return {
    length,
    hits,
    hit,
    sunk
  };
}

module.exports = {Ship}