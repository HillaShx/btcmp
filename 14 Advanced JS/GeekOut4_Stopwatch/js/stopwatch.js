"use strict";

var clockDiv = document.createElement("div");
function startClock() {
  var hh = 0;
  hh = checkCount(hh);
  var mm = 0;
  mm = checkCount(mm);
  var ss = 0
  ss = checkCount(ss);
  clockDiv.innerText = `${hh}:${mm}:${ss}`;
  var bodyDOM = document.body;
  bodyDOM.insertBefore(clockDiv, bodyDOM.childNodes[0]);
}

function checkCount(n) {
  if (n < 10) {
    return `0${n}`;
  }
}

function countUp() {
  if (ss === 59) {
        ss = 0;
        mm++;
        console.log("i see the seconds");
      } else {
        ss++;
      }
      if (mm === 59) {
        mm = 0;
        hh++;
        console.log("i see the minutes");
      } else {
        ss++;
      }
      clockDiv.innerText = `${hh}:${mm}:${ss}`;
}

// var startCount = setInterval(() => {
//   if (ss === 59) {
//     ss = 0;
//     mm++;
//     console.log("i see the seconds");
//   } else {
//     ss++;
//   }
//   if (mm === 59) {
//     mm = 0;
//     hh++;
//     console.log("i see the minutes");
//   } else {
//     ss++;
//   }
//   clockDiv.innerText = `${hh}:${mm}:${ss}`;
// }, 1000);

function stopCount() {
  clearInterval(startCount);
}

var startBtnDOM = document.querySelector("#start-btn");
var stopBtnDOM = document.querySelector("#stop-btn");
startBtnDOM.addEventListener("click",setInterval(() => {
  if (ss === 59) {
    ss = 0;
    mm++;
    console.log("i see the seconds");
  } else {
    ss++;
  }
  if (mm === 59) {
    mm = 0;
    hh++;
    console.log("i see the minutes");
  }
  // } else {
  //   ss++;
  // }
  clockDiv.innerText = `${hh}:${mm}:${ss}`;
}, 1000));
stopBtnDOM.addEventListener("click", stopCount);