function isOver18() {
  var userAge = document.getElementById("user-age").value;
  var printMsg = document.getElementById("can-drink");
  if (userAge >= 18) {
    printMsg.innerHTML = "You can drink!"
  } else {
    printMsg.innerHTML = "You are too young. Go home."
  }
}