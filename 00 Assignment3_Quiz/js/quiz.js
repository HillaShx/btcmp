var GoodPlaceQuiz = {
  questions:
  {
    question1: {
      question: "What is your favorite flavor of ice-cream?",
      answers: [
        {answer_0: "I had ice-cream with the queen once"},
        {answer_1: "The one with whipped cream on top and a shrimp cocktail on the side"},
        {answer_2: "Uuuuhhhhh..."},
        {answer_3: "Tacos"}
        ]
    },
    question2: {
      question: "What's your idea of fun?",
      answers: [
        {answer_0: "Shrimp cocktails and tequila"},
        {answer_1: "Discussing moral philosophy"},
        {answer_2: "My idea is to have a good time and then it'll be fun"},
        {answer_3: "I enjoy people being jealous of me, especially my sister"}
      ]
      },
  question3: {
    question: "What do you do for a living?",
    answers: [
      {answer_0: "PAR-TEEEEEEY"},
      {answer_1: "Ugh!! doing things \"for a living\", how BORING! let's talk about something else!"},
      {answer_2: "What do you mean?"},
      {answer_3: "I teach a subject I'm highly passionate about"}
    ]
  },
  question4: {
    question: "Someone cut you in line. How do you respond?",
    answers: [
      {answer_0: "MOTHERFORKER"},
      {answer_1: "Uuuuuhhhh..."},
      {answer_2: "Hey, I'm in line? Nice! What for?"},
      {answer_3: "Standing in line isn't really my style"}
    ]
  },
  question5: {
    question: "What would you take with you to a desert island?",
    answers: [
      {answer_0: "I don't do desert islands"},
      {answer_1: "Gallons of shrimp cocktails"},
      {answer_2: "My best friend because he can always make me laugh"},
      {answer_3: "My wallet and keys. No, my car and my books. No! my..."}
    ]
  }
},
  results: [
    {
      name: "Tahani Al-Jameel",
      img: "./img/avatars/tahani.jpg",
      description: "You are Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      points: 0
    },
    {
      name: "Chidi Anagonye",
      img: "./img/avatars/chidi.jpg",
      description: "You are Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      points: 0
    },
    {
      name: "Jason Mandoza",
      img: "./img/avatars/jason.jpg",
      description: "You are Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      points: 0
    },
    {
      name: "Eleanor Shellstrop",
      img: "./img/avatars/eleanor.jpg",
      description: "You are Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      points: 0
    }
  ]
}


var charactersArray = GoodPlaceQuiz.results;
// charactersArray: 0-tahani, 1-chidi, 2-jason, 3-eleanor

// q1: 0-t,1-e,2-c,3-j;
// q2: 0-e,1-c,2-j,3-t;
// q3: 0-j,1-e,2-t,3-c;
// q4: 0-e,1-c,2-j,3-t;
// q5: 0-t,1-e,2-j,3-c;

var questionNumber = 0;
var slideshowDOM = document.getElementById("slideshow");

function getQuestionObjectFromDOM() {
  return document.getElementById("quiz-question");
}

function getAnswersObjectFromDOM() {
  return document.getElementsByClassName("active-slide")[0];
}

function insertQuestionItemsToSlide(qslide) {
  var questionDOM = getQuestionObjectFromDOM();
  var answersDOM = getAnswersObjectFromDOM();
  questionDOM.innerHTML = GoodPlaceQuiz.questions["question" + qslide].question;
  var answerNumInObj = 0;
  for (var i=0; i<answersDOM.childElementCount; i++) {
    for (var j=0; j<answersDOM.children[i].childElementCount; j++) {
      answersDOM.children[i].children[j].innerHTML = GoodPlaceQuiz.questions["question" + qslide].answers[answerNumInObj]["answer_" + answerNumInObj];
      answerNumInObj++;
    }
  }
}

function prevSlide() {
  if (questionNumber === 1) {
    var activeSlide = document.getElementsByClassName("active-slide")[0];
    activeSlide.classList.remove("active-slide");
    var openingSlide = document.getElementById("opening-slide");
    openingSlide.className += " active-slide";
    activeSlide.classList.remove("active-slide");
    questionNumber--;
    hideNavigation();
  } else {
    questionNumber--;
    insertQuestionItemsToSlide(questionNumber);
  }
}


function nextSlide() {
  if (!document.getElementsByClassName("active-answer")[0]) {
    popAlert();
  } else if (questionNumber === Object.keys(GoodPlaceQuiz.questions).length) {
    turnToResult();
    questionNumber = 0;
  } else {
    var chosenAnswer = parseInt(document.getElementsByClassName("active-answer")[0].getAttribute('value'));
    switch (questionNumber) {
      case 1:
        switch (chosenAnswer) {
          case 0: charactersArray[0].points++; break;
          case 1: charactersArray[3].points++; break;
          case 2: charactersArray[1].points++; break;
          case 3: charactersArray[2].points++; break;
        }
        break;
      case 2:
        switch(chosenAnswer) {
          case 0: charactersArray[3].points++; break;
          case 1: charactersArray[1].points++; break;
          case 2: charactersArray[2].points++; break;
          case 3: charactersArray[0].points++; break;
        }
        break;
      case 3:
        switch (chosenAnswer) {
          case 0: charactersArray[2].points++; break;
          case 1: charactersArray[3].points++; break;
          case 2: charactersArray[0].points++; break;
          case 3: charactersArray[1].points++; break;
        }
        break;
      case 4:
        switch (chosenAnswer) {
          case 0: charactersArray[3].points++; break;
          case 1: charactersArray[1].points++; break;
          case 2: charactersArray[2].points++; break;
          case 3: charactersArray[0].points++; break;
        }
        break;
      case 5:
        switch (chosenAnswer) {
          case 0: charactersArray[0].points++; break;
          case 1: charactersArray[3].points++; break;
          case 2: charactersArray[2].points++; break;
          case 3: charactersArray[1].points++; break;
      }
    }
    questionNumber++;
    deselectLastAnswer();
    insertQuestionItemsToSlide(questionNumber);
  }
}

function deselectLastAnswer() {
  var chosenAnswer = document.getElementsByClassName("active-answer")[0];
  chosenAnswer.classList.remove("active-answer");
}

function turnToQuestions() {
  var activeSlide = document.getElementsByClassName("active-slide")[0];
  activeSlide.classList.remove("active-slide");
  var questionsSlide = document.getElementById("questions-slide");
  questionsSlide.className += " active-slide";
  questionNumber++;
  insertQuestionItemsToSlide(questionNumber);
  revealNavigation();
}

function turnToResult() {
  // result slide
  hideNavigation();
  var activeSlide = document.getElementsByClassName("active-slide")[0];
  activeSlide.classList.remove("active-slide");
  var resultSlide = document.getElementById("result-slide");
  resultSlide.className += " active-slide";
  var resultChar = {};
  var resultPoints = 0;
  for (var i = 0; i < GoodPlaceQuiz.results.length; i++) {
    if (charactersArray[i].points > resultPoints) {
      resultChar = charactersArray[i];
      resultPoints = charactersArray[i].points;
    }
  }
  document.getElementById("result-ava").src = resultChar.img;
  document.getElementById("result-anouncement").innerText += " " + resultChar.name;
  document.getElementById("result-description").innerText = resultChar.description
}

function revealNavigation() {
  document.getElementsByClassName("nav-btn")[0].classList.remove("hide");
  document.getElementsByClassName("nav-btn")[1].classList.remove("hide");
}

function hideNavigation() {
  document.getElementsByClassName("nav-btn")[0].className += " hide";
  document.getElementsByClassName("nav-btn")[1].className += " hide";
}

var answersDOM = slideshowDOM.getElementsByClassName("answer");
for (var i=0; i<answersDOM.length; i++) {
  answersDOM[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-answer");

    // if one of my answers has the "active" class
    if (current.length > 0) {
      current[0].classList.remove("active-answer");
    }
  
    this.className += " active-answer";
    document.getElementsByClassName("nav-btn")[1].style.fontWeight = "bold";
  });
}

var charactersDOM = document.getElementsByClassName("char-avatar");
var charNum = 0;
for (var i=0; i<charactersDOM.length; i++) {
  charNum=i;
  charactersDOM[i].addEventListener("mouseover", function() {
    // var current = document.getElementById("which-are-you");
  
    document.getElementById("which-are-you").innerText = this.alt + "?";
    // this.innerText = charactersArray[charNum].name;
  });
}

function popAlert() {
  document.getElementById("no-chosen-answer-alert-screen").style.visibility = "visible";
  document.getElementById("no-chosen-answer-alert-screen").style.zIndex = "2";
}

function hideAlert() {
  document.getElementById("no-chosen-answer-alert-screen").style.visibility = "hidden";
  document.getElementById("no-chosen-answer-alert-screen").style.zIndex = "-1";
}