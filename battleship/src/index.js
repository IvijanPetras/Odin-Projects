import './styles/main.scss'
const ship = require('./factories/ship')
const board = require('./factories/gameboard')

const myShip = ship.Ship(3)
const myGameboard = board.Gameboard()

myGameboard.placeShip(myShip, 2, 2, true)

console.log(myGameboard.board)