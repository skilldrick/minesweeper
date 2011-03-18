function forEach(arr, callback) {
  if (!arr.push || typeof callback !== "function") {
    throw "Argument error";
  }

  for (var i = 0, len = arr.length; i < len; i++) {
    callback(arr[i]);
  }
}
