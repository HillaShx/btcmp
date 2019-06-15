"use strict";

let currGameboard = new Gameboard();
const gameboardElm = $("#gameboard");

function hideElm(elm) {
  elm.addClass('hide');
}

function showElm(elm) {
  elm.removeClass('hide');
}

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
          showElm(victoryPopupElm);
        }
      } else {
        setTimeout(() => $('.active').removeClass('active'),2000);
        currGameboard.moves++;
      }
      $('#moves-counter').html(currGameboard.moves);  
    }

  });
};

function updateHiscoreTable() {
  $('#hiscore-table').html('          <tr><th id="left">Player Name</th><th id="right">Player Score</th></tr>');
  let diffLevelStorage = JSON.parse(localStorage[App.diffLevel]);
  for (let prop in diffLevelStorage) {
    let newRow = $('<tr/>');
    let nameCol = $('<td/>');
    let scoreCol = $('<td/>');
    nameCol.html(prop);
    nameCol.appendTo(newRow);
    scoreCol.html(diffLevelStorage[prop]);
    scoreCol.appendTo(newRow);
    newRow.appendTo($('#hiscore-table'));
  }
}

startGame(currGameboard);

$('.hamburger').click(function() {
  $('.hamburger-menu').toggleClass("hide");
})

$('.btn-new-game').click(function() {
  gameboardElm.html('');
  currGameboard = new Gameboard();
  startGame(currGameboard);
  hideElm($('#hiscore-table-popup'));
})

$('.hamburger-menu li').click(function() {
  hideElm($('.hamburger-menu'));
})

$('#victory-popup .butn').click(function() {
  hideElm($('#victory-popup'));
})

$('#enter-score-registration').click(function() {
  hideElm($('#victory-popup'));
  showElm($('#hiscore-registration-popup'));
})

$('#register-hiscore').click(function() {
  let playerName = $("#playername");
  let diffLevelStorage = JSON.parse(localStorage[App.diffLevel]);
  diffLevelStorage[playerName.val()] = currGameboard.moves;
  localStorage[App.diffLevel] = JSON.stringify(diffLevelStorage);
  updateHiscoreTable();
  hideElm($('#hiscore-registration-popup'));
  showElm($('#hiscore-table-popup'));
})