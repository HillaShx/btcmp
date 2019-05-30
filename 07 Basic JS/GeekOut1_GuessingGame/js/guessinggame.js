var guesses = 1;
var userWon = false;
while (guesses && !userWon) {
  var userGuess = prompt("Guess a number:");
  var numberToGuess = Math.ceil(Math.random() * 10);
  if (userGuess == numberToGuess) {
    userWon = true;
    console.log("GREAT SUCCESS!");
  } else {
    console.log("FAIL");
  }
  guesses--;
}
console.log(numberToGuess);
console.log(userGuess);