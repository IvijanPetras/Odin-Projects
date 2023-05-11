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

function updateGameboard(board){
  const cellArr = []
  const rows = [...board.children]
  rows.forEach((a) => {
    const cells = a.children
    cellArr.push(...cells)
  })
  cellArr.forEach(cell => {
    if(typeof cell.value === 'object'){
      cell.innerHtml = ''
      cell.st
    }
  })
}

module.exports = { createUIBoard }
