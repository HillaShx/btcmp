function arithProg(d) {
  var arithObj = 
   {
    d: d,
    printElement: function(n) {
      var tempArr = [0];
      var tempNum = 0;
      for (var i=0; i<n; i++) {
          tempArr[i] = tempNum ;
          tempNum+=arithObj.d;
      }
      console.log(tempArr);
    }
  }
  return arithObj;
}