function calcAverage(arr) {
  var sum=0;
  for (var i=1; i<arr.length; i++) {
    sum+=arr[i];
  }
  return sum/arr.length;
}

calcAverage([85,90,92]);