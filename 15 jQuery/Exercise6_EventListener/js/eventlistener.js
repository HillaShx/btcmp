var textfields = $("input");
function getTextValues() {
  var textItems = [];
  textfields.each(function(item) {
    textItems.push($(this).val());
  });
  return textItems.join(" ");
};

textfields.on("keyup",function(e) {
  $("#results").text(getTextValues());
});