function createUIBoard(board, player) {
  board.forEach((el) => {
    const row = document.createElement("div")
    row.className = "row"
    row.setAttribute("data-row-number", board.indexOf(el))
    for (let i = 0; i < el.length; i++) {
      const rowCell = document.createElement("div")
      rowCell.className = "cell"
      rowCell.setAttribute("data-col-number", i)
      row.append(rowCell)
    }
    player.append(row)
  })
}

module.exports = { createUIBoard }
