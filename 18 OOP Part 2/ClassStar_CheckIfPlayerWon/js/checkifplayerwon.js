class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  };

  didWin() {
    if (this.score > 30) {
      return true;
    } else {
      return false;
    }
  };

  checkIfPlayerWon() {
    if (this.didWin()) {
      console.log(`${this.name} has won!`);
    }
  }
}

let p1 = new Player("Spongebob");
p1.score = 32;

p1.checkIfPlayerWon();