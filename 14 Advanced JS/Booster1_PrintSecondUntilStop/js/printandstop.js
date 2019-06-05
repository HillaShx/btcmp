var stopBtn = document.querySelector("#stop-btn");
stopBtn.addEventListener("click",stopCount);
var printNum = createNumDiv();
var counter = setInterval(printNum,1000);

function stopCount() {
  clearInterval(counter);
}

function createNumDiv() {
  var num = 0;
  var newDivForNum = document.createElement("div");
  var divClone;
  return function() {
    num++;
    divClone = newDivForNum.cloneNode();
    document.body.appendChild(divClone);
    divClone.innerText = num;
  }
}