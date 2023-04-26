import './styles/main.scss'
const ship = require('./factories/ship')
const board = require('./factories/gameboard')
const players = require('./factories/player')

const myShip = ship.Ship(3)
const myShip2 = ship.Ship(4)
const myGameboard = board.Gameboard()
const playa = players.Players()

myGameboard.placeShip(myShip, 2, 2, true)
myGameboard.placeShip(myShip2, 5, 3, "horizontal")
myGameboard.receiveAttack(1,2)
myGameboard.receiveAttack(2,2)
myGameboard.receiveAttack(3,2)
//myGameboard.receiveAttack(4,2)
console.log(myGameboard.board)
console.log(playa.human.attack(myGameboard.board,5,3))



