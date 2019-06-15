"use strict";

let currGameboard = new Gameboard();
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

function hasWon() {
  return currGameboard.revealedPairs === currGameboard.deck.length/2;
}

function startGame(currGameboard) {
  initBoard(currGameboard);
  currGameboard.addClassesToCardElms();
  let cards = $('.card');
  cards.click(function(e) {
    if ($('.active').length < 1) {
      $(e.currentTarget).addClass("active");
    } else if ($('.active').length < 2 && !$(e.currentTarget).hasClass('active')) {
      $(e.currentTarget).addClass("active");
      if (isPair($('.active'))) {
        $('.active').addClass("is-revealed");
        $('.active').removeClass("active");
        currGameboard.revealedPairs++;
        currGameboard.moves++;
        if (hasWon()) {
          let victoryPopupElm = $("#victory-popup");
          $('#display-moves-count').html(currGameboard.moves);
          victoryPopupElm.toggleClass('hide');
        }
      } else {
        setTimeout(() => $('.active').removeClass('active'),2000);
        currGameboard.moves++;
      }
      $('#moves-counter').html(currGameboard.moves);  
    }

  });
};

startGame(currGameboard);

$('.hamburger').click(function() {
  $('.hamburger-menu').toggleClass("hide");
})

$('.btn-new-game').click(function() {
  gameboardElm.html('');
  currGameboard = new Gameboard();
  if (!$('#victory-popup').hasClass('hide')) {
    $('#victory-popup').addClass('hide');
  }
  startGame(currGameboard);

})

$('.hamburger-menu li').click(function() {
  $('.hamburger-menu').addClass('hide');
})