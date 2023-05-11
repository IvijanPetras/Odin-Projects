import "./styles/main.scss"
const playerBoard = document.querySelector(".player-board")
const aiBoard = document.querySelector(".ai-board")
const ship = require("./factories/ship")
const board = require("./factories/gameboard")
const players = require("./factories/player")
const helpers = require("./helpers/helpers")
const battleships = document.querySelectorAll(".ship")

const myGameboard = board.Gameboard()
const aiGameboard = board.Gameboard()

helpers.createUIBoard(myGameboard.board, playerBoard) // create player gameboard
helpers.createUIBoard(aiGameboard.board, aiBoard) // create ai gameboard

const cellArrAi = []
const aiRows = [...aiBoard.children]
aiRows.forEach((a) => {
  const cells = a.children
  cellArrAi.push(...cells)
})

cellArrAi.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    cellListener(e, cell)
  })
  cell.addEventListener("dragover", dragOver)
  cell.addEventListener("drop", (e) => {
    dragDrop(e, aiGameboard)
  })
})

function cellListener(e, cell) {
  const row = getCoords(e).row
  const col = getCoords(e).col
  if (aiGameboard.receiveAttack(row, col)) {
    cell.classList.add("ship-hit", "no-pointer-events")
  } else {
    cell.innerText = "X"
    cell.classList.add("no-pointer-events")
  }
  if (aiGameboard.areAllShipsSunk()) alert("gameover")
}

battleships.forEach((ship) => {
  ship.addEventListener("dragstart", dragStart)
})
let beingDragged

function dragStart(e) {
  beingDragged = e.target
}
function dragDrop(e, board) {
  const row = getCoords(e).row
  const col = getCoords(e).col
  if (board.placeShip(shipType(beingDragged.innerText), row, col, true)) {
    return e.target.append(beingDragged)
  }
  return alert ('Invalid Move')
}
function dragOver(e) {
  e.preventDefault()
}

function shipType(type) {
  switch (type) {
    case "Submarine":
      return ship.Ship(3)
    case "Carrier":
      return ship.Ship(5)
    case "Destroyer":
      return ship.Ship(3)
    case "Battleship":
      return ship.Ship(4)
    case "Patrol Boat":
      return ship.Ship(2)
    default:
      console.log("error")
      break
  }
}

function getCoords(e) {
  const row = +e.target.parentNode.dataset.rowNumber
  const col = +e.target.dataset.colNumber
  console.log(row, col)
  return {
    row,
    col,
  }
}


