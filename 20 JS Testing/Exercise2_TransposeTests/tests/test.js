function transposeArray(arr) {
  var transArray = [];
  for (var i=0; i<arr.length; i++) {
    var rowLen = arr[i].length;
    transArray.push([]);
    for (var j=0; j<rowLen; j++) {
      transArray[i].push(arr[j][i]);
    }
  }
  return transArray;
}

let expect = require('chai').expect;

it('should return a transposed array', ()=> {
  expect(transposeArray([[2,3],[4,5]]).to.eql([[2,4],[3,5]]);
});