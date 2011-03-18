var Board = function (width, height) {
  return {
    width: width,
    height: height,
    getCell: function (x, y) {
      if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
        return new Cell();
      }
    }
  };
};
