setTimeout(() => {
  var msgDiv = document.createElement("div");
  msgDiv.classList.add('thank-you-msg');
  msgDiv.innerText = "Thank you for waiting!";
  document.body.appendChild(msgDiv);
  document.querySelector("title").innerText = "Thank you!";
}, 15000);