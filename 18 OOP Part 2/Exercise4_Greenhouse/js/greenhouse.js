class Plant {
  constructor(blossomSeason, color) {
    this.color = color;
    this.blossomSeason = blossomSeason;
  }

  isBlooming(season) {
    return season === this.blossomSeason;
  }
}


function printBloomingPlants(plants, season) {
  let bloomingPlants = [];
  plants.forEach(plant => {
    if (plant.isBlooming(season)) {
      bloomingPlants.push(plant);
    }
  })
  return bloomingPlants;
}


let perach1 = new Plant("winter", "green");
let perach2 = new Plant("winter", "blue");
let perach3 = new Plant("autumn", "red");
let perach4 = new Plant("autumn", "orange");
let perach5 = new Plant("summer", "white");
let perach6 = new Plant("summer", "yellow");
let perach7 = new Plant("spring", "black");
let perach8 = new Plant("spring", "purple");
let plants = [perach1, perach2, perach3, perach4, perach5, perach6, perach7, perach8];