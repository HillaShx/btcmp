function getNumberOfCalls() {
  var callsSum = 0;
  return function() {
    callsSum++;
    if (callsSum === 1) {
      console.log(`I was invoked ${callsSum} time!`)
    } else {
      console.log(`I was invoked ${callsSum} times!`)
    }
    return callsSum;
  }
}

numberOfCalls = getNumberOfCalls();