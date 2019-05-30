function getSumNinja(...names) {
  var result = 0;
  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names[i].length; j++) {
      result += names[i][j];
    }
  }
  return result;
}

function testSolution (actual, expected, msg) {
  if (Array.isArray(expected)) {
    for (var i = 0; i < expected.length; i++) {
      testSolution(actual[i], expected[i], `item in index ${i}`);
    }
  } else {
    if (actual !== expected) {
      console.log(`Error testing ${msg || ''}. expected: ${expected}, got: ${actual}`);
    }
  }
}