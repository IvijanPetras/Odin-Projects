function createUIBoard(board, player) {
  board.forEach((el) => {
    const row = document.createElement("div");
    row.className = "row"
    row.setAttribute("data-row-number", board.indexOf(el))
    for (let i = 0; i < el.length; i++) {
      const rowCell = document.createElement("div")
      rowCell.className = 'cell'
      rowCell.setAttribute("data-col-number", i)
      row.append(rowCell)
    }
    player.append(row)
  });
}

// let beingDragged

// function dragStart(e) {
//   beingDragged = e.target
// }
// function dragDrop(e, board) {
//   const row = getCoords(e).row
//   const col = getCoords(e).col
//   board.placeShip(ship, row, col, true)
//   e.target.append(beingDragged)
// }
// function dragOver(e) {
//   e.preventDefault()
// }



function getCoords(e) {
  const row = +e.target.parentNode.dataset.rowNumber
  const col = +e.target.dataset.colNumber
  return {
    row,
    col
  }
}


module.exports = { createUIBoard, getCoords };
