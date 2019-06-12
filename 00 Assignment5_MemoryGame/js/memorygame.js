let memoryGameApp =  {
  diffLevel: "easy",
  picsForCards: {
    easy: ["axolotl", "birb", "cat", "dog", "frog", "sloth"],
    medium: ["croc", "crow", "duck"],
    hard: ["hedgehog", "otter", "tortoise"]
  },
  numOfCards: {
    easy: 12,
    medium: 18,
    hard: 24
  },

}

class Gameboard {
  constructor() {
    this.picsForCards = memoryGameApp.picsForCards[memoryGameApp.diffLevel];
    this.numOfCards = memoryGameApp.numOfCards[memoryGameApp.diffLevel];
    this.deck = this.getShuffledDeck();
  };

  getShuffledDeck() {
    let deck = [];
    for (let i=0; i<this.numOfCards/2; i++) {
      for (let id=1; id<=2; id++) {
        deck.push(new Card(id,this.picsForCards[i]));
      }
    }
    for (let i = deck.length-1; i>0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]]
    };
    return deck;
  }
}

class Card {
  constructor(id, pic, isFlipped = false) {
    this.id = id;
    this.pic = `../img/${pic}.jpg`;
  }

  flip() {
    this.isFlipped = true;
  }
}


let currGameboard = new Gameboard();
