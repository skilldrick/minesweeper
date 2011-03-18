TestCase("CellTest", {
  setUp: function () {
    this.emptyCell = new Cell();
    this.minedCell = new Cell(true);
  },

  "test create new cell": function () {
    assertObject("cell should be an object", this.emptyCell);
  },

  "test new cell is unexposed": function () {
    assertFalse(
      "cell should start unexposed",
      this.emptyCell.exposed
    );
  },

  "test after expose cell is exposed": function () {
    this.emptyCell.expose();
    assertTrue("cell should turn exposed", this.emptyCell.exposed);
  },

  "test cell by default has no mine": function () {
    assertFalse(
      "emptyCell should not have a mine",
      this.emptyCell.hasMine
    );
  },

  "test mine can be set": function () {
    this.emptyCell.setMine();
    assertTrue(
      "emptyCell should now have mine",
      this.emptyCell.hasMine
    );
  },

  "test minedCell has mine": function () {
    assertTrue(
      "minedCell should have a mine",
      this.minedCell.hasMine
    );
  },


});
