function Ship(length) {
  let hits = 0
  let sunk = false
  console.log(this.sunk)
  function hit() {
    this.hits++
    if (this.hits >= this.length) this.sunk = true
    //console.log('hits:',this.hits, 'length:', length)
  }

  function isSunk() {
    //console.log('sunk:', sunk, 'this sunk:', this.sunk)
    if (this.sunk) return true
    return false
  }

  return {
    length,
    hits,
    hit,
    isSunk,
  }
}

module.exports = { Ship }
