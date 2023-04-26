function Players() {
  let playerTurn = false;

  const randomNum = () => {
    return Math.floor(Math.random() * 11);
  };

  const human =  {
     attack(gameboard, row, col) {
         console.log(gameboard[row][col])
      if (gameboard[row][col] === null) return gameboard[row][col] === "miss"
      if (gameboard[row][col] === "miss") return alert("illegal move")
    }
}
  

  function ai() {
    //check if random move is illegal
  }

  return {
    human,
    playerTurn,
  };
}

module.exports = { Players };
