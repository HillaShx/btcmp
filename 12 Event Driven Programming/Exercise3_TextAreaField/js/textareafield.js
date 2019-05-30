function isLongEnough() {
  var txtLength = document.getElementById("application").value.length;
  var printMsg = document.getElementById("length-error");
  if (txtLength < 100) {
    printMsg.innerHTML = "Your application is not long enough. Please type at least 100 chars.";
  }
}