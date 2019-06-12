class Account {
  constructor(sum) {
    this.sum = sum;
  };

  deposit(amount) {
    this.sum += amount;
  };

  withdraw(amount) {
    this.sum -= amount;
  };

  canWithdraw(amount) {
    return amount <= this.sum;
  }
}

function lottery(account) {
  if (!account.canWithdraw(100)) {
    console.log(`cannot withdraw 100`);
  } else {
    let amount = Math.floor(Math.random() * 100) + 1;
    let isWinner = Math.floor(Math.random() * 2) < 1;
    if (isWinner) {
      account.sum += amount + 30;
    } else {
      account.sum -= amount;
    }
  }
}

let snorka = new Account(1200);
for (let i=0; i<5; i++) {
  lottery(snorka);
}
console.log(snorka.sum);