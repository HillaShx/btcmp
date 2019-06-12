"use strict";

let App =  {
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
    this.picsForCards = App.picsForCards[App.diffLevel];
    this.numOfCards = App.numOfCards[App.diffLevel];
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

  addClassesToCardElms() {
    let cardElms = $(".card");
    for (let i=0;i<cardElms.length; i++) {
      $(cardElms[i]).addClass(this.deck[i].type)
      $(cardElms[i]).attr("id", this.deck[i].type + this.deck[i].id);
    }
  }

  spreadCardsOnBoard() {
    let cardElms = $(".card");
    cardsElm.forEach()
  }
}

class Card {
  constructor(id, type, isFlipped = false) {
    this.id = id;
    this.type = type;
    this.picPath = `../img/${type}.jpg`;
  }

  flip() {
    this.isFlipped = !this.isFlipped;
  }
}


let currGameboard = new Gameboard();
