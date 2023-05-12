function createUIBoard(board, player) {
  let n = 0
  board.forEach((el) => {
    const row = document.createElement("div")
    row.className = `row row${n}`
    row.setAttribute("data-row-number", board.indexOf(el))
    for (let i = 0; i < el.length; i++) {
      const rowCell = document.createElement("div")
      rowCell.className = `cell cell${i}`
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
  console.log(rows, occupiedCoords)
  // rows.forEach((a) => {
  //   cellArr.push(...a)
  // })
  console.log(cellArr)
  cellArr.forEach(cell => {
    console.log(cell)
    // if(typeof cell === 'object'){
    //   cell.innerHtml = ''
    //   cell.style.property.backgroundStyle = 'red'
    // }
  })
}

module.exports = { createUIBoard, updateGameboard }
