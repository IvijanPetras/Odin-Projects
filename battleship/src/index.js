import './styles/main.scss'
const ship = require('./factories/ship')

const bla = ship.CreateShip(3)
bla.hit()
console.log(bla.getLength())