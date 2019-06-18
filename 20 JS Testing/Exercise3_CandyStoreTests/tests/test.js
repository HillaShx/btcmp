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

let expect = require('chai').expect;
describe('getCandy(): returns a candy object', ()=> {
  describe('Typical Cases', () => {
    it('should return mint gum', ()=> {
      expect(getCandy(candyStore,"as12f")).to.eql({name: "mint gum", id: "as12f", price: 2, amount:2});
    })
  })
})

describe('getPrice(): returns price of candy object', ()=> {
  describe('Typical Cases', ()=> {
    it('should return 5', ()=> {
      expect(getPrice(candyStore,"5hd7y")).to.equal(5);
    })
  })
})

describe('addCandy(): adds candy object to candyStore object', ()=> {
  describe('Typical Cases', ()=> {
    it('should return newly added candy', ()=> {
      addCandy(candyStore, "jk89j", "choc", 4);
      expect(getCandy(candyStore,"jk89j")).to.eql({name: "choc", id: "jk89j", price: 4, amount: 1});
    });
  });
})

describe('buyCandy(): decreases candy\'s amount by 1', ()=> {
  describe('Typical Cases', ()=> {
    it('should return candyStore.length-1', ()=> {
      buyCandy(candyStore, "5hd7y");
      expect(getCandy(candyStore , "5hd7y").amount).to.equal(3);
    })
    it('should return cashRegister-=5', ()=> {
      expect(candyStore.cashRegister).to.equal(205);
    })
  })
})