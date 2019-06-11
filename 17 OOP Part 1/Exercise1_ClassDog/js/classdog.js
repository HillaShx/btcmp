class Dog {
  constructor(name, type, age, isCuddly) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.isCuddly = isCuddly;
  }
};

let snorka = new Dog("Snorka","Pinscher",4,true);
let tofu = new Dog("Tofu", "Jack Russel", 6, false);
let birb = new Dog("BIRB", "cockatiel", 3, true);

function describeDog(doge) {
  if (doge.isCuddly) {
    console.log(`This is ${doge.name} the ${doge.type}. They are ${doge.age} years old and they love to cuddle!`);
  } else console.log(`This is ${doge.name} the ${doge.type}. They are ${doge.age} years old and they wish you'd to stay away!`);
};

describeDog(snorka);
describeDog(tofu);
describeDog(birb);