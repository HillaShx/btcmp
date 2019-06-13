class Card {
  constructor(id, type, isFlipped = false) {
    this.id = id;
    this.type = type;
    this.picPath = `../img/${type}.jpg`;
  };

  flip() {
    // this.isFlipped = !this.isFlipped;
  }
}