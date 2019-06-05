arr = [1,90,75,-2];

function getClosestPair(arr) {
  var num1 = arr[0];
  var num2 = arr[1];
  var diff = Math.abs(num1-num2);
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr.length; j++) {
      var currDiff = Math.abs(arr[i]-arr[j]);
      if (i !== j && currDiff < diff) {
        diff = currDiff;
        num1 = arr[i];
        num2 = arr[j];
      }
    }
  }
  return [num1,num2];
}