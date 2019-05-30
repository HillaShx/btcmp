var candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "Torteat",
      id: "5hd7y",
      price: 5,
      amount: 4
    }
  ],
  cashRegister: 200
};

function getCandy(candy_store, id) {
  for (var i=0; i<candy_store.candies.length; i++) {
    if (candy_store.candies[i].id == id) {
      return candy_store.candies[i];
    }
  }
};

function getPrice(candy_store, id) {
  for (var i=0; i<candy_store.candies.length; i++) {
    if (candy_store.candies[i].id == id) {
      return candy_store.candies[i].price;
    }
  }
};

function addCandy(candy_store, id, name, price) {
  candy_store.candies[candy_store.candies.length] = {
    name: name,
    id: id,
    price: price,
    amount: 1
  }
};

function buyCandy(candy_store, id) {
  for (var i=0; i<candy_store.candies.length; i++) {
    if (candy_store.candies[i].id === id) {
      candy_store.cashRegister += candy_store.candies[i].price;
      candy_store.candies[i].amount -= 1;
    }
  }
}