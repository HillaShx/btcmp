function imageDisAppear () {
  var isChecked = document.getElementById("image-dis-appear").checked;
  var image = document.getElementById("image");
  if (isChecked) {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}