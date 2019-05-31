var questions = {
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
      {answer_1: "Define \"fun\""},
      {answer_2: "My idea is to have a good time and then it'll be fun"},
      {answer_3: "I enjoy people being jealous of me, especially my sister"}
    ]
  },
  question3: {
    question: "What do you do for a living?",
    answers: [
      {answer_0: "PAR-TEEEEEEY"},
      {answer_1: "Ugh!! doing things \"for a living\", how BORING! let's talk about something else!"},
      {answer_2: "What do you mean, darling?"},
      {answer_3: "I teach a subject I'm highly passionate about"}
    ]
  },
  question4: {
    question: "Someone cut you in line. How do you respond?",
    answers: [
      {answer_0: "MOTHERFORKER"},
      {answer_1: "Uuuuuhhhh..."},
      {answer_2: "Hey, I'm in line? Nice! What for?"},
      {answer_3: "Oh, I don't stand in line, dear"}
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
  },
  // question6: {
  //   question: "",
  //   answer_a: "",
  //   answer_b: "",
  //   answer_c: "",
  //   answer_d: ""
  // },
  // question7: {
  //   question: "",
  //   answer_a: "",
  //   answer_b: "",
  //   answer_c: "",
  //   answer_d: ""
  // },
  // question8: {
  //   question: "",
  //   answer_a: "",
  //   answer_b: "",
  //   answer_c: "",
  //   answer_d: ""
  // },
  // question9: {
  //   question: "",
  //   answer_a: "",
  //   answer_b: "",
  //   answer_c: "",
  //   answer_d: ""
  // },
  // question10: {
  //   question: "",
  //   answer_a: "",
  //   answer_b: "",
  //   answer_c: "",
  //   answer_d: ""
  // }
}


var eleanor = 0;
var jason = 0;
var tahani = 0;
var chidi = 0;
var questionNumber = 0;
var slideshowDOM = document.getElementById("slideshow");

function getQuestionObjectFromDOM() {
  return document.getElementById("quiz-question");
}

function getAnswersObjectFromDOM() {
  return document.getElementsByClassName("active-slide")[0];
}

function insertQuestionItemsToSlide(qslide) {
  // insert each item object to slide. iterate the function call until you are out of questions.
  var questionDOM = getQuestionObjectFromDOM();
  var answersDOM = getAnswersObjectFromDOM();
  questionDOM.innerHTML = questions["question" + qslide].question;
  var answerNumInObj = 0
  for (var i=0; i<answersDOM.childElementCount; i++) {
    for (var j=0; j<answersDOM.children[i].childElementCount; j++) {
      answersDOM.children[i].children[j].innerHTML = questions["question" + qslide].answers[answerNumInObj]["answer_" + answerNumInObj];
      answerNumInObj++;
    }
  }
}

// insertQuestionItemsToSlide(questionNumber);

// q1: 0-t,1-e,2-c,3-j;
// q2: 0-e,1-c,2-j,3-t;
// q3: 0-j,1-e,2-t,3-c;
// q4: 0-e,1-c,2-j,3-t;
// q5: 0-t,1-e,2-j,3-c;

function nextSlide() {
  if (!document.getElementsByClassName("active-answer")[0]) {
    document.getElementById("") // THIS IS WHERE I STOPPED. Make error div visible;
  } else {
    var chosenAnswer = parseInt(document.getElementsByClassName("active-answer")[0].getAttribute('value'));
    switch (questionNumber) {
      case 1:
        switch (chosenAnswer) {
          case 0: tahani++; break;
          case 1: eleanor++; break;
          case 2: chidi++; break;
          case 3: jason++; break;
        }
        break;
      case 2:
        switch(chosenAnswer) {
          case 0: eleanor++; break;
          case 1: chidi++; break;
          case 2: jason++; break;
          case 3: tahani++; break;
        }
        break;
      case 3:
        switch (chosenAnswer) {
          case 0: jason++; break;
          case 1: eleanor++; break;
          case 2: tahani++; break;
          case 3: chidi++; break;
        }
        break;
      case 4:
        switch (chosenAnswer) {
          case 0: eleanor++; break;
          case 1: chidi++; break;
          case 2: jason++; break;
          case 3: tahani++; break;
        }
        break;
      case 5:
        switch (chosenAnswer) {
          case 0: tahani++; break;
          case 1: eleanor++; break;
          case 2: jason++; break;
          case 3: chidi++; break;
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

function revealNavigation() {
  document.getElementsByClassName("nav-btn")[0].classList.remove("hide");
  document.getElementsByClassName("nav-btn")[1].classList.remove("hide");
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
  });
}
