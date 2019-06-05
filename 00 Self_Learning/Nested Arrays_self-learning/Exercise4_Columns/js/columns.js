function printByCol(arr) {
  var newOrder = [];
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr.length; j++) {
      if (arr[j][i] !== undefined){
        newOrder.push(arr[j][i]);
      }
    }
  }
  console.log(newOrder);
}

arr1 = [
  [1,2,3],
  [4],
  [5,6],
  [7,8,9]
];

arr2 = [
  [9,8,7],
  [6,5],
  [4],
  [3,2,1]
];