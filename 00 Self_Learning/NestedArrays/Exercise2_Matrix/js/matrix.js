var arr10 = [
  [1,2],
  [3,4,5,6],
  [7],
  [8,9,10]
];

function printAllNums(arr) {
  var printArr = [];
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr[i].length; j++) {
      printArr.push(arr[i][j]);
    }
  }
  console.log(printArr);
}

function getRowsSum(arr) {
  var allRowSums = [];
  for (var i=0; i<arr.length; i++) {
    var rowSum = 0;
    for (var j=0; j<arr[i].length; j++) {
      rowSum += arr[i][j];
    }
    allRowSums.push(rowSum);
  }
  return allRowSums;
}