class Player {
  constructor(name, score=0) {
    this.name = name;
    this.score = score;
  }
};

let p1 = new Player("Efrohi");

function play(player) {
  let randInt = Math.ceil(Math.random() * 10);
  if (randInt % 2 === 0) {
    player.score++;
  }
};

function game(player) {
  for (let i=0; i<3; i++) {
    play(player);
  }
  return player.score;
};

