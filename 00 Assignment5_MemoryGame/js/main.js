"use strict";

let currGameboard = new Gameboard();
let gameInPlay = true;
const gameboardElm = $("#gameboard");

function initBoard(currGameboard) {
  $('.card').removeClass("active is-revealed")
  let movesCounterElm = $('#moves-counter');
  movesCounterElm.html(currGameboard.moves);
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

function isPair(cards) {
  return $(cards[0]).children().attr("type") === $(cards[1]).children().attr("type");
}

function startGame(currGameboard) {
  initBoard(currGameboard);
  currGameboard.addClassesToCardElms();
};

startGame(currGameboard);

let cards = $('.card');
cards.click(function(e) {
  $('.active');
  if ($('.active').length < 1) {
    $(e.currentTarget).addClass("active");
  } else if ($('.active').length < 2 && !$(e.currentTarget).hasClass('active')) {
    $(e.currentTarget).addClass("active");
    if (isPair($('.active'))) {
      $('.active').addClass("is-revealed");
      $('.active').removeClass("active");
    } else {
      setTimeout(() => $('.active').removeClass('active'),2000);
    }
    currGameboard.moves++;
    $('#moves-counter').html(currGameboard.moves);
  }
});

$('.hamburger').click(function() {
  $('.hamburger-menu').toggleClass("hide");
})

$('.btn-new-game').click(function() {
  currGameboard = new Gameboard();
  currGameboard.deck = currGameboard.getShuffledDeck();
  startGame(currGameboard);
})