TestCase("GameTest", {
  "test Game is defined": function () {
    assertNotUndefined("Game should be defined", Game);
  },

  "test Game is object": function () {
    assertObject("Game should be an object", Game);
  }, 

  "test Game has a Board": function () {
    assertObject("Game should have a board", Game.board)
  }
});
