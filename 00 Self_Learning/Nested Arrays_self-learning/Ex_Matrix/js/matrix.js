var arr1 = [
  [1,1,1],
  [2,2,2],
  [3,3,3]
];

var arr2 = [
  [1,2],
  [5,6],
  [3,4]
];

var arr3 = [
  [1,2,3],
  [4,5],
  [6,7,8]
];

function printAllValues(arr) {
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr.length; j++) {
      console.log(arr[i][j]);
    }
  }
}