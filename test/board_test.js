TestCase("BoardTest", {
  setUp: function () {
    this.width = 10;
    this.height = 20;
    this.board = Board(this.width, this.height);
  },

  //take an array of cell coordinates and call callback on
  //the corresponding cells
  loopCells: function (cells, callback) {
    var board = this.board;

    forEach(cells, function (cellCoords) {
      var cellX = cellCoords[0];
      var cellY = cellCoords[1];
      var cell = board.getCell(cellX, cellY);
      callback(cellX, cellY, cell);
    });
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
  },

  "test Board has dimensions": function () {
    assertEquals(
      "Board should be correct width",
      this.width, this.board.width
    );
  },

  "test valid cells at Board limits": function () {
    var validCells = [
      [0, 0],
      [0, this.height - 1],
      [this.width - 1, 0],
      [this.width - 1, this.height - 1]
    ];

    this.loopCells(validCells, function (x, y, cell) {
      assertObject(
        "Cell at " + x + ", " + y + " should be valid",
        cell
      );
    });
  },

  "test invalid cells at Board limits": function () {
    var invalidCells = [
      [-1, 0],
      [0, this.height],
      [this.width, 0],
      [this.width, this.height]
    ];

    this.loopCells(invalidCells, function (x, y, cell) {
      assertUndefined(
        "Cell at " + x + ", " + y + " should be undefined",
        cell
      );
    });
  },

  "test getCell returns different cells for different locations":
  function () {
    assertNotSame(
      "Cells should be different",
      this.board.getCell(0, 1),
      this.board.getCell(1, 1)
    );
  },

  "test getCell returns same cell for same location":
  function () {
    assertSame(
      "Cells should be same",
      this.board.getCell(1, 1),
      this.board.getCell(1, 1)
    );
  },

  "test cell with no mine-neighbours": function () {
    assertEquals(
      "Cell should have no neighbours",
      0,
      this.board.getNeighbours(1, 1)
    );
  },

  "test cell with one mine-neighbour": function () {
    this.board.getCell(0, 0).setMine();
    assertEquals(
      "Cell should have one neighbour",
      1,
      this.board.getNeighbours(1, 1)
    );
  },

  "test cell with two mine-neighbours": function () {
    this.board.getCell(0, 1).setMine();
    this.board.getCell(2, 2).setMine();
    assertEquals(
      "Cell should have two neighbours",
      2,
      this.board.getNeighbours(1, 1)
    );
  },

});
