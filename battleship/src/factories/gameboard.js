const Gameboard = () => {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null))
  const ships = []
  const occupiedCoords = []

  const placeShip = (ship, row, col, orientation) => {
    console.log(ship)
    const { length } = ship
    for (let i = 0; i < length; i++) {
      let newRow = row
      let newCol = col

      if (orientation === "horizontal") {
        newCol += i
      } else {
        newRow += i
      }

      if (newRow >= board.length || newCol >= board[0].length) {
        // Ship goes beyond the board, so cannot be placed
        return false
      }

      if (board[newRow][newCol] !== null) {
        // Another ship already occupies this square, so cannot be placed
        return false
      }

      occupiedCoords.push([newRow, newCol])
    }

    ships.push(ship)

    // Update the board with the ship object
    for (let i = 0; i < occupiedCoords.length; i++) {
      const [row, col] = occupiedCoords[i]
      board[row][col] = ship
    }
    console.log(ships)
    return true
  }

  const receiveAttack = (row, col) => {
    if (board[row][col] === null) {
      // Missed shot
      board[row][col] = "miss"
      console.log(board)
      return false
    } else {
      // Hit a ship
      const ship = board[row][col]
      ship.hit()
      console.log(ship.isSunk())
      if (ship.isSunk()) {
        // Ship is now sunk
        ships.splice(ships.indexOf(ship), 1)
      }

      return true
    }
  }

  const areAllShipsSunk = () => ships.every((ship) => ship.isSunk())

  return { board, placeShip, receiveAttack, areAllShipsSunk, ships, occupiedCoords }
}

module.exports = { Gameboard }
