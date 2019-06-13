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
    let cardElms = $(".frontside");
    for (let i=0;i<cardElms.length; i++) {
      $(cardElms[i]).addClass(this.deck[i].type)
      $(cardElms[i]).attr("type", this.deck[i].type)
      $(cardElms[i]).attr("id", this.deck[i].type + this.deck[i].id);
    }
  }

  spreadCardsOnBoard() {
    let cardElms = $(".card");
    cardsElm.forEach()
  }
}