var storm =  {
  superpower: "flying",
  printOwnSuperPower: printSuperPower
};

function printSuperPower() {
  console.log("my super power is " + this.superpower);
}