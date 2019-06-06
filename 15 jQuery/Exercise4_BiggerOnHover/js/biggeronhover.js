var textContent = ["some text","some other text"];
for (var i=0; i<textContent.length; i++) {
  var newDiv = $("<div/>");
  newDiv.appendTo("body");
  newDiv.text(textContent[i]);
}

$("div").on("mouseover mouseout",function(e) {
  $(e.target).toggleClass("some-container");
});