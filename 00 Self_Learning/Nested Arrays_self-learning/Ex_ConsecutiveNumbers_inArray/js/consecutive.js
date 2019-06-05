function hasConsecutiveNumbers(arr) {
  var hasConsec = false;
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr.length; j++) {
      if (i !== j && arr[i] === arr[j]+1) {
        hasConsec = true;
      }
    }
  }
  return hasConsec;
}