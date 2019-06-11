class Jewel {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

let ring = new Jewel("ring", 200);
let bracelet = new Jewel("bracelet", 300);

function getHigherPrice(jewel1,jewel2) {
  return Math.max(jewel1.price,jewel2.price);
}