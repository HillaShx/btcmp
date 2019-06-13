"use strict";

let currGameboard = new Gameboard();
let gameInPlay = true;
const gameboardElm = $("#gameboard");

function placeCardElmsOnBoard() {
  for (let i=0; i<App.numOfCards[App.diffLevel]; i++) {
    let cardboxElm = $("<div/>")
    if (App.diffLevel === "medium") {
      cardboxElm.addClass("col-6 col-sm-4 col-md-4 card-box");  
    } else {
      cardboxElm.addClass("col-6 col-sm-4 col-md-3 card-box");
    }
    let cardElm = $("<span/>");
    cardElm.addClass("card");
    let frontCardElm = $("<span/>");
    frontCardElm.addClass("frontside");
    let backCardElm = $("<span/>");
    backCardElm.addClass("backside");
    frontCardElm.appendTo(cardElm);
    backCardElm.appendTo(cardElm);
    cardElm.appendTo(cardboxElm);
    cardboxElm.appendTo(gameboardElm);
  }
};

function checkIfSameType() {
  let twoActiveCards = $('.active');
  if (isPair(twoActiveCards)) {
    twoActiveCards.addClass("is-found");
    twoActiveCards.removeClass("active");
  }
}

function isPair(twoActiveCards) {
  return twoActiveCards[0].type === twoActiveCards[1].type;
}

function startGame() {
  while (gameInPlay) {
    placeCardElmsOnBoard();
    currGameboard.addClassesToCardElms();
    gameInPlay = false;
  }
};

startGame();

var cards = $('.card');
cards.click(function(e) {
  let activeCards = $('.active');
  if (activeCards.length < 1) {
    $(e.currentTarget).addClass("active");
  } else if (activeCards.length < 2) {
    $(e.currentTarget).addClass("active");
    checkIfSameType();
  }
});