class Recipe {
  constructor(title,serving,ingredients) {
    this.title = title;
    this.serving = serving;
    this.ingredients = ingredients;
  }
};

let guac = new Recipe("Guacamole", 4, ["avocado", "lime", "chili", "onion", "garlic"]);

function printRecipeInfo(recipe) {
  for (let prop in recipe) {
    if (typeof recipe[prop] === "object") {
      console.log(`*${prop}:`);
      for (let i=0; i<recipe[prop].length; i++) {
        console.log(`    *${recipe[prop][i]}`);
      }
    } else console.log(`*${prop}: ${recipe[prop]}`);
  }
}