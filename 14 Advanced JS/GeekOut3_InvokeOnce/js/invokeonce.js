function getIndentationReminder() {
  var isOn = true;
  return function(keepGoing = isOn) {
    if (keepGoing) {
      console.log("Don't forget your indentation!");
      isOn = false;
    }
  }
}

var indentationReminder = getIndentationReminder();
indentationReminder();
indentationReminder();
indentationReminder();