function lightSwitchDiv () {
  var lightHalo = document.getElementById("lightb-halo");
  if (lightHalo.style.background.includes("yellow")) {
    lightHalo.style.background = "white";
  } else {
    lightHalo.style.background = "yellow";
  }
}

function lightSwitchImg() {
  var lightBulbImage = document.getElementById("lightbulb");
  if (lightBulbImage.src.includes("lightb-off.png")) {
    lightBulbImage.src = "./img/lightb-on.jpg";
    lightBulbImage.style.margin = "0"
  } else {
    lightBulbImage.src = "./img/lightb-off.png";
    lightBulbImage.style.margin = "20px 0  0 -130px"
  }
}
