function getContSum() {
  var total = 0;
  return function (n) {
    total+=n;
    return total;
  }
}

var contSum = getContSum();