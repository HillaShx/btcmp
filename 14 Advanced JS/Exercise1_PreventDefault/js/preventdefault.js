var myChkbx = document.getElementById("my-chkbx");
myChkbx.addEventListener("click", function(e) {
  e.preventDefault();
  document.body.appendChild(errMsg);
})

var errMsg = document.createElement("div");
errMsg.style.backgroundColor = "rgba(200,0,0,0.5)";
errMsg.style.fontSize = "32px";
errMsg.innerText = "You are not allowed to click this checkbox!";