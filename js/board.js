var Board = function (width, height) {
  var cellGrid;
  function init() {
    cellGrid = [];
    var currentRow;
    for (var i = 0; i < width; i++) {
      currentRow = [];
      for (var j = 0; j < height; j++) {
        currentRow.push(new Cell());
      }
      cellGrid.push(currentRow);
    }
  }

  function checkBounds(x, y) {
    return x >= 0 && x < width && y >= 0 && y < height;
  }

  function getCell(x, y) {
    if (checkBounds(x, y)) {
      return cellGrid[x][y];
    }
  }

  function getNeighbours(x, y) {
    var neighbours = 0;
    var cell;
    if (checkBounds(x, y)) {
      for (var xOffset = -1; xOffset <= 1; xOffset++) {
        for (var yOffset = -1; yOffset <= 1; yOffset++) {
          if (xOffset === 0 && yOffset === 0) {
            //this is the cell itself
            continue;
          }
          cell = getCell(x + xOffset, y + yOffset);
          if (cell.hasMine) {
            neighbours++;
          }
        }
      }

      return neighbours;
    }
  }

  init();

  return {
    width: width,
    height: height,
    getCell: getCell,
    getNeighbours: getNeighbours
  };
};
