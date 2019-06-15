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
      cardboxElm.addClass("col-6 col-sm-4 col-md-4 col-lg-2 card-box");  
    } else {
      cardboxElm.addClass("col-6 col-sm-4 col-md-3 col-lg-2 card-box");
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
    } else if ($('.active').length < 2 && (!$(e.currentTarget).hasClass('active')) && (!$(e.currentTarget).hasClass('is-revealed'))) {
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

function hideShownPopup() {
  for (let i=0; i<$('.popup').length; i++) {
    if (!$($('.popup')[i]).hasClass('hide')) {
      $($('.popup')[i]).addClass('hide')
    }
  }
};

function updateHiscoreTable() {
  let diffLevelTitle = App.diffLevel.charAt(0).toUpperCase() + App.diffLevel.slice(1);
  $('#diff-level-score-table').html(diffLevelTitle);
  $('#hiscore-table').html('<tr><th>Player Name</th><th>Player Score</th></tr>');
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
  hideShownPopup();
  showElm($('#new-game-popup'));
})

$('.diff-level-selector').click(function(e) {
  hideElm($('#new-game-popup'));
  App.diffLevel = $(e.target).attr("level");
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

$('.btn-high-scores').click(function() {
  updateHiscoreTable();
  showElm($('#hiscore-table-popup'));
})

$('.btn-close-popup').click(function() {
  hideShownPopup();
})