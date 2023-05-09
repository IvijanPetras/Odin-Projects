import './styles/main.scss'
const playerBoard = document.querySelector('.player-board')
const aiBoard = document.querySelector('.ai-board')
const ship = require('./factories/ship')
const board = require('./factories/gameboard')
const players = require('./factories/player')
const helpers = require('./helpers/elements')



const myShip = ship.Ship(3)
const myShip2 = ship.Ship(4)
const myGameboard = board.Gameboard()
const aiGameboard = board.Gameboard()
const player = players.Players()

helpers.createUIBoard(myGameboard.board,playerBoard) // create player gameboard
helpers.createUIBoard(aiGameboard.board,aiBoard)     // create ai gameboard
aiGameboard.placeShip(myShip, 2, 2, true)
aiGameboard.placeShip(myShip2, 5, 3, "horizontal")
// myGameboard.receiveAttack(1,2)
// myGameboard.receiveAttack(2,2)
// myGameboard.receiveAttack(3,2)
//myGameboard.receiveAttack(4,2)
 console.log(aiGameboard.board)
// console.log(playa.human.attack(myGameboard.board,5,3))

function getCoords(e) {
    const row = +e.target.parentNode.dataset.rowNumber
    const col = +e.target.dataset.colNumber
    return {
      row,
      col
    }
  }

const cellArr = document.querySelectorAll('.cell')
cellArr.forEach(cell => cell.addEventListener('click', (e) => {
    if(e.target.innerText === 'X') return
    const row = getCoords(e).row
    const col = getCoords(e).col
    if(aiGameboard.receiveAttack(row,col)){
        cell.classList.add('ship-hit', 'no-pointer-events')
    } else {
        cell.innerText = 'X'
    }
    console.log(aiGameboard.board)
}))

console.log(cellArr)