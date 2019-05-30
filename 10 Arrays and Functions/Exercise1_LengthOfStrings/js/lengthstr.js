// star

function lenOfStr (arr) {
  var arrNum = [];
  for (var i = 0; i < arr.length; i++) {
    arrNum[i] = arr[i].length;
  }
  return arrNum;
}

// ninja

function lenOfNinja (arr) {
  return arr.map(w => w.length);
}


function testSolution (actual, expected, msg) {
  if (Array.isArray(expected)) {
    for (var i = 0; i < expected.length; i++) {
      testSolution(actual[i],expected[i],"item in index "+i);
    }
  } else {
    if (actual !== expected) {
      console.log(`Error testing ${msg || ''}. expected: ${expected}, got: ${actual}`);
    }
  }
}