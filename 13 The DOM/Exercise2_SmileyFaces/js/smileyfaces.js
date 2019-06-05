var howMany = document.getElementById("how-many-smiley");
var newSmiley = document.createElement("img");
newSmiley.src = "./img/smiley_face.png";
var smileyContainer = document.querySelector("#smiley-container");

function printSmiley(eventObj) {
  if (isNaN(howMany.value)) {
    alert("Please enter a number!")
  }
  var duplicates = parseInt(howMany.value);
  smileyContainer.innerHTML = "";
  var smileys = [];
  for (var i=0; i<duplicates; i++) {
    smileys[i] = newSmiley.cloneNode();
    smileyContainer.appendChild(smileys[i]);
  }
}

document.querySelector("button#submit").addEventListener("click", printSmiley);