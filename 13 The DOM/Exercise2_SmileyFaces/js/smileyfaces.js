var howMany = document.getElementById("how-many-smiley");
var newSmiley = document.createElement("img");
newSmiley.src = "./img/smiley_face.png";

function printSmiley(eventObj) {
  if (isNaN(howMany.value)) {
    alert("Please enter a number!")
  }
  var duplicates = parseInt(howMany.value);
  removeOldSmileys();
  var smileys = [];
  for (var i=0; i<duplicates; i++) {
    smileys[i] = newSmiley.cloneNode();
    document.body.appendChild(smileys[i]);
  }
}

function removeOldSmileys() {
  var smileysOnScreen = document.querySelectorAll("img");
  if (smileysOnScreen.length > 0) {
    for (var i=0; i<smileysOnScreen.length; i++) {
      smileysOnScreen[i].remove()
    }
  }
}

document.querySelector("button#submit").addEventListener("click", printSmiley);