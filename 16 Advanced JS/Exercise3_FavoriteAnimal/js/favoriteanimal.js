this.favorite_animal = "dolphin";

let spiderman = {
  favorite_animal: "spider"
};

function printFavoriteAnimal() {
  console.log(this.favorite_animal);
  return this.favorite_animal;
};

// Invoke the printFavouriteAnimal function with 3 different contexts:
// 1. the spiderMan object context
let spidyFav = printFavoriteAnimal.bind(spiderman);
spidyFav();
// 2. the global scope
printFavoriteAnimal();
// 3. a context you pass to the function on the fly
// printFavoriteAnimal.call({favorite_animal: "horse"}); <- another way of binding and calling on the same line.
printFavoriteAnimal.bind({favorite_animal: "horse"})();

