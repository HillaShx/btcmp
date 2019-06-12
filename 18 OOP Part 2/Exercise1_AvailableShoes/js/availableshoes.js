class Shoe {
  constructor(name, availSizes) {
    this.name = name;
    this.availSizes = availSizes;
  };

  isAvailable(size) {
    return this.availSizes.includes(size);
  }
}

let naalul = new Shoe("Rav Magaph",[12,14,16]);
naalul.isAvailable(12);
naalul.isAvailable(13);