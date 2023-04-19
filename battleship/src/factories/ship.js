 function CreateShip(length) {
  let hitCount = 0;
  let sunk = false;
  return {
    hitCount,
    length,
    hit(){
     this.hitCount++
    },
    getLength(){
        return this.length
    },
    isSunk(){
        if(this.hitCount === length) return true
        return false
    }
  };
}

module.exports = {CreateShip}