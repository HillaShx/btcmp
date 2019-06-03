var myText = document.getElementById("text");
var minusBtn = document.querySelector("#minus");
var plusBtn = document.querySelector("#plus");

function enlargeText(eventObj) {
  var sizePlusOne = parseInt(myText.style.fontSize) + 1;
  if (sizePlusOne <= 100) {
    myText.style.fontSize = sizePlusOne.toString() + "px";
  }
}

function shrinkText(eventObj) {
  var sizeMinusOne = parseInt(myText.style.fontSize) - 1;
  if (sizeMinusOne >= 6) {
    myText.style.fontSize = sizeMinusOne.toString() + "px";
  }
}

minusBtn.addEventListener("click", shrinkText);
plusBtn.addEventListener("click", enlargeText);