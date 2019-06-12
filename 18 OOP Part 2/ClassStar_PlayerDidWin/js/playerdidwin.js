class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  };

  didWin() {
    if (this.score > 30) {
      console.log(`${this.name} has won!`);
    }
  }
}

let p1 = new Player("Spongebob");
p1.score = 32;

p1.didWin();