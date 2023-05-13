function createUIBoard(board, player, name) {
  let n = 0
  board.forEach((el) => {
    const row = document.createElement("div")
    row.className = `row row${n}-${name}`
    row.setAttribute("data-row-number", board.indexOf(el))
    for (let i = 0; i < el.length; i++) {
      const rowCell = document.createElement("div")
      rowCell.className = `cell cell${i}-${name}`
      rowCell.setAttribute("data-col-number", i)
      row.append(rowCell)
    }
    player.append(row)
    n++
  })
}

function updateGameboard(board, occupiedCoords){
  const cellArr = []
  const rows = [...board.children]
  const occupiedRows = []
  const occupiedCols = []
  occupiedCoords.forEach(coord => {
    occupiedRows.push(coord[0])
    occupiedCols.push(coord[1])
  })
  for (let i = 0; i< occupiedRows.length; i++) {
    const row = document.querySelector(`.row${occupiedRows[i]}-ai`)
    const cell = row.querySelector(`.cell${occupiedCols[i]}-ai`)
    cell.innerHTML = ''
    cell.style.backgroundColor = 'red'
  } 
  
}

module.exports = { createUIBoard, updateGameboard }
