for (var i=0; i<2; i++) {
  $("<div/>")
  .appendTo($("body"));
}

$("div:nth-child(1)").text("some text");
$("div:nth-child(2)").text("some more text");

var allDivs = $("div");
$(document).ready(function() {
  setTimeout(function() {
    allDivs.addClass("some-container");
  }, 5000)
});