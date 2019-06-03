var btnTo1 = document.getElementById("nav-to-1");
var btnTo2 = document.getElementById("nav-to-2");
var btnTo3 = document.getElementById("nav-to-3");

function changeTo1() {
  var currClasses = document.getElementsByClassName("image")[0].className;
  if (currClasses.includes("image-2")) {
    document.getElementsByClassName("image")[0].classList.remove("image-2");
  } else if (currClasses.includes("image-3")) {
    document.getElementsByClassName("image")[0].classList.remove("image-3");
  } else {
    document.getElementsByClassName("image")[0].classList.remove("image-1");
  }
  document.getElementsByClassName("image")[0].classList.add("image-1");
}

function changeTo2() {
  var currClasses = document.getElementsByClassName("image")[0].className;
  if (currClasses.includes("image-1")) {
    document.getElementsByClassName("image")[0].classList.remove("image-1");
  } else if (currClasses.includes("image-3")) {
    document.getElementsByClassName("image")[0].classList.remove("image-3");
  } else {
    document.getElementsByClassName("image")[0].classList.remove("image-2");
  }
  document.getElementsByClassName("image")[0].classList.add("image-2");
}

function changeTo3() {
  var currClasses = document.getElementsByClassName("image")[0].className;
  if (currClasses.includes("image-1")) {
    document.getElementsByClassName("image")[0].classList.remove("image-1");
  } else if (currClasses.includes("image-2")) {
    document.getElementsByClassName("image")[0].classList.remove("image-2");
  } else {
    document.getElementsByClassName("image")[0].classList.remove("image-3");
  }
  document.getElementsByClassName("image")[0].classList.add("image-3");
}

btnTo1.addEventListener("click", changeTo1);
btnTo2.addEventListener("click", changeTo2);
btnTo3.addEventListener("click", changeTo3);