var coins = 50;
var totalNumOfRounds = 3;
var numOfRounds = totalNumOfRounds;
var userName = prompt("What is your name?");
var userCard;
var compCard;
var keepPlaying = true;
while (coins > 0 && numOfRounds > 0 && keepPlaying) {
  var currBet = parseInt(prompt(`You have ${coins} coins and ${numOfRounds} rounds. How much would you like to bet for this round?`));
  if (!currBet.isNaN) {
    userCard = Math.floor(Math.random() * Math.floor(13)) + 1;
    compCard = Math.floor(Math.random() * Math.floor(13)) + 1;
    if (userCard === compCard) {
      alert("Draw");
    } else if (userCard > compCard) {
      coins += currBet;
      numOfRounds--;
      alert(`You won this round! You have ${coins} coins`);
    } else {
      coins -= currBet;
      numOfRounds--;
      alert(`You lost this round! You have ${coins} coins`);
    }
  } else {
    alert("invalid input");
    keepPlaying = false;
  }
  if (coins <= 0) {
    alert("You are broke");
    keepPlaying = false;
  }
  if (coins > 0 && numOfRounds > 0 && keepPlaying) {
    keepPlaying = confirm("Press OK to keep playing and cancel to quit the game");
  }
}
alert(`Game over! You played ${totalNumOfRounds-numOfRounds} rounds and have ${coins} coins`);