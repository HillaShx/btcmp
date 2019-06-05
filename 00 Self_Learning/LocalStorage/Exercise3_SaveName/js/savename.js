var userInput = document.getElementById("user-input");
var greetBox = document.getElementById("greet-user");
var displayName = document.getElementById("user-name");
var saveBtn = document.getElementById("save-btn");

function greetUser() {
  if (localStorage.userName !== null) {
    displayName.innerText = localStorage.userName;
  } else if (userInput.value.length === 0) {
    greetBox.classList.add("hide");
  } else {
    greetBox.classList.remove("hide");
    displayName.innerText = userInput.value;
  }
}

function saveName() {
  localStorage.userName = userInput.value;
}

greetUser();
userInput.addEventListener("keyup", greetUser);
saveBtn.addEventListener("click", saveName);