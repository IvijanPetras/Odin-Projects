const CreateShip = require('./ship')
const playerBoard = document.querySelector('.player-board')
const aiBoard = document.querySelector('.ai-board')

const ships = CreateShip.CreateShip()

function cellListener(e){
    
}

function Gameboard(size){
    const board = []
    const numOfCells = size * size
    for (let i = 0; i < numOfCells; i++) {
        const cell = document.createElement('div')
        cell.className = 'cell'
        cell.innerText = i
        cell.setAttribute('id', `${i}`)
        cell.addEventListener('click', (e) => {
            cellListener(e)
        })
        playerBoard.append(cell)
        board.push(i)
    }
    return board
}


module.exports = {Gameboard}