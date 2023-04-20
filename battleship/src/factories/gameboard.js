const playerBoard = document.querySelector('.player-board')
const aiBoard = document.querySelector('.ai-board')

function Gameboard(size){
    const board = []
    const numOfCells = size * size
    for (let i = 0; i < numOfCells; i++) {
        const cell = document.createElement('div')
        cell
        cell.innerText = i
        const cellId = i
        playerBoard.append(cell)
        board.push(cellId)
    }
    return board
}


module.exports = {Gameboard}