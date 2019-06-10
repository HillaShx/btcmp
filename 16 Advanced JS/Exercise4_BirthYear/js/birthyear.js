var wolverine = {
  birth_year: 1888,
  printBirthYear: function() {
    console.log(this.birth_year);
  }
}

birth_year = 1900;

wolverine.printBirthYear.call(this);