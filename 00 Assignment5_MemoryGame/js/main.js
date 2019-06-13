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

function startGame() {
  while (gameInPlay) {
    currGameboard.addClassesToCardElms();

  }
};


placeCardElmsOnBoard();
currGameboard.addClassesToCardElms();

var cards = $('.card');
cards.click(function(e) {
  $(e.currentTarget).addClass("active");
  // console.log(e.currentTarget);
});

// $(".card").forEach(function(element) {
//   $(element).on("click", function(e) {
//     $(element).addClass("active");
//   })
// })

// $(".card").on("click", function(e) {
//   // alert("you clicked on a card!");
//   $(".card").addClass("active");
// });