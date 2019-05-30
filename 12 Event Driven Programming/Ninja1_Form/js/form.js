function isValid(){
  document.getElementById("display-name").innerHTML = document.getElementById("data-name").value;
  document.getElementById("display-age").innerHTML = document.getElementById("data-age").value;
  document.getElementById("display-email").innerHTML = document.getElementById("data-email").value;
  document.getElementById("info-confirmation").style = "display: block;";
  document.getElementById("successful-submission").style = "display:none;";
}

function confirm() {
  document.getElementById("info-confirmation").style = "display: none;";
  document.getElementById("successful-submission").style = "display: block;";
}

function editInformation() {
  document.getElementById("successful-submission").style = "display:none;";
  document.getElementById("info-confirmation").style = "display: none;";
}