const playerBoard = document.querySelector(".player-board");
const aiBoard = document.querySelector(".ai-board");
const battleships = document.querySelector(".battleships");

function dragAndDropShip() {}

function clickedPositionListener(e) {
  const row = e.target.parentNode.dataset.rowNumber;
  const col = e.target.dataset.colNumber;
  return {
    row,
    col
  }
}

function createUIBoard(board) {
  board.forEach((el) => {
    const row = document.createElement("div");
    row.className = "row";
    row.setAttribute("data-row-number", board.indexOf(el));
    for (let i = 0; i < el.length; i++) {
      const rowCell = document.createElement("div");
      rowCell.innerText = i;
      rowCell.setAttribute("data-col-number", i);
      rowCell.addEventListener("click", (e) => {
        clickedPositionListener(e);
      });
      row.append(rowCell);
    }
    playerBoard.append(row);
  });
}

module.exports = { createUIBoard };
