var cmInFeet = 0.0328;
var feetInCm = 30.48;
var heightCmDOM = document.getElementById("height-cm");
var heightFeetDOM = document.getElementById("height-feet");

function convertToFeet(eventObj) {
  var heightCm = eventObj.target.value;
  document.getElementById("height-feet").value = (heightCm * cmInFeet).toString();
}

function convertToCm(eventObj) {
  var heightFeet = eventObj.target.value;
  document.getElementById("height-cm").value = (heightFeet * feetInCm).toString();
}

heightCmDOM.addEventListener("keyup", convertToFeet);
heightFeetDOM.addEventListener("keyup", convertToCm);