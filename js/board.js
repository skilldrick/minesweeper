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

  init();

  return {
    width: width,
    height: height,
    getCell: function (x, y) {
      if (checkBounds(x, y)) {
        return cellGrid[x][y];
      }
    }
  };
};
