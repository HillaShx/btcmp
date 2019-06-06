var toggleBtn = $("<button/>");
toggleBtn.text("click me!");
toggleBtn.appendTo("body");
var allDivs = $("div");
toggleBtn.click(function(e) {
  $("div").toggleClass("blue-bg");
});
