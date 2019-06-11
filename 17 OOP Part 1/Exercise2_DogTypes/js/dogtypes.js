class Dog {
  constructor(name, type, age, isCuddly) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.isCuddly = isCuddly;
  }
};

let snorka = new Dog("Snorka","pinscher",4,true);
let tofu = new Dog("Tofu", "jack russel", 6, false);
let birb = new Dog("BIRB", "cockatiel", 3, true);
let dogs = [snorka,tofu,birb];

function describeDog(doge) {
  if (doge.isCuddly) {
    console.log(`This is ${doge.name} the ${doge.type}. They are ${doge.age} years old and they love to cuddle!`);
  } else console.log(`This is ${doge.name} the ${doge.type}. They are ${doge.age} years old and they wish you'd to stay away!`);
};

function getDogsOfType(dogs,type) {
  let dogsOfChosenType = [];
  for (let i=0; i<dogs.length; i++) {
    if (dogs[i].type === type) {
      dogsOfChosenType.push(dogs[i].name);
    }
  }
  return dogsOfChosenType;
};