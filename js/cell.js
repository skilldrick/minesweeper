var Cell = function (hasMine) {
  this.hasMine = !!hasMine;
  this.exposed = false;
};

Cell.prototype.expose = function () {
  this.exposed = true;
};

Cell.prototype.setMine = function () {
  this.hasMine = true;
};
