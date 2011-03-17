TestCase("BoardTest", {
  setUp: function () {
    this.board = Board();
  },

  "test Board is object": function () {
    assertObject("Board should be an object", this.board);
  },

  "test Board has Cells": function () {
    assertInstanceOf(
      "Board should have Cells",
      Cell,
      this.board.getCell(0, 0)
    );
  }
});
