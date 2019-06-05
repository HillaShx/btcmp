function transposeArray(arr) {
  var transArray = [];;
  for (var i=0; i<arr.length; i++) {
    var rowLen = arr[i].length;
    transArray.push([]);
    for (var j=0; j<rowLen; j++) {
      transArray[i].push(arr[j][i]);
    }
  }
  return transArray;
}

arr1 = [
  [1,2,3],
  [4,5],
  [6]
];