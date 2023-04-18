 function CreateShip(length) {
  const hitCount = 0;
  const isSunk = false;
  return {
    hitCount,
    isSunk,
    length,
    hit(){
      hitCount++
    },
    getLength(){
        return length
    }
  };
}

module.exports = {CreateShip}