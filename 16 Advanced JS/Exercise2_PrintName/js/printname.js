let pikachu = {
  name: "pika",
  printName: function() {
    console.log(this.name);
  },
  printNameAfterSec: function() {
    setTimeout(this.printName.bind(this),1000);
  }
};