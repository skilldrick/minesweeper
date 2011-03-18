TestCase("UtilityTest", {
  "test forEach is function": function () {
    assertFunction("forEach should be a function", forEach);
  },

  "test forEach requires array and function arguments":
  function () {
    var args = [
      [5, "hello"],
      [[1, 2, 3], "hello"],
      ["hello", function () {}]
    ];

    for (var i = 0, len = args.length; i < len; i++) {
      assertException(
        "forEach should throw an exception with invalid arguments",
        function () {
          forEach(args[i][0], args[i][1]);
        }
      );
    }
  },

  "test forEach applies callback to each element": function () {
    var total = 0;
    var arr = [1, 2, 3, 4];
    forEach(arr, function (x) {
      total += x;
    });

    assertEquals(
      "array should be summed",
      10,
      total
    );
  },

});
