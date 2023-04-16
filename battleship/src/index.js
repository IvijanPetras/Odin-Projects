import './styles/main.scss'
import { CreateShip } from './factories/ship'

const ship = CreateShip(4)
const ship2 = CreateShip(2)

console.log(ship.hit(), ship2.hit())    