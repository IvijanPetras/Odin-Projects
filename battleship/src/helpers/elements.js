const playerBoard = document.querySelector(".player-board");
const aiBoard = document.querySelector(".ai-board");
const battleships = document.querySelector(".battleships");

function dragAndDropShip() {}

function createUIBoard(board) {
   board.forEach(el => {
    const cell = document.createElement('div')
    cell.className = board.indexOf(el)
    for (let i = 0; i < el.length; i++) {
        const cellChild = document.createElement('div')
        cellChild.innerText = i
        cellChild.setAttribute('id', i)
        cell.append(cellChild)
    }
    playerBoard.append(cell)
   });
}

module.exports = { createUIBoard };
