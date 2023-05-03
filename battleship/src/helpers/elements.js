const battleships = document.querySelectorAll(".ship");

function createUIBoard(board, player) {
  board.forEach((el) => {
    const row = document.createElement("div");
    row.className = "row";
    row.setAttribute("data-row-number", board.indexOf(el));
    for (let i = 0; i < el.length; i++) {
      const rowCell = document.createElement("div");
      rowCell.className = 'cell'
      rowCell.setAttribute("data-col-number", i);
      rowCell.addEventListener("click", clickedPositionListener);
      rowCell.addEventListener("dragover", dragOver);
      rowCell.addEventListener("drop", dragDrop);
      row.append(rowCell);
    }
    player.append(row);
  });
}

let beingDragged;

function dragStart(e) {
  beingDragged = e.target;
}
function dragDrop(e) {
  console.log(e.target);
  e.target.append(beingDragged);
}
function dragOver(e) {
  e.preventDefault();
}

battleships.forEach((ship) => {
  ship.addEventListener("dragstart", dragStart);
});

function clickedPositionListener(e) {
  const row = +e.target.parentNode.dataset.rowNumber;
  const col = +e.target.dataset.colNumber;
  console.log(row, col);
  return {
    row,
    col,
  };
}

module.exports = { createUIBoard };
