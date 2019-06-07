var textfields = $("input");
var textItems = [];
function getTextValues() {
  textfields.each(function(item) {
    var textItem = jQuery(item);
    textItems.push(textItem.val());
  });
};

textfields.on("keyup",function(e) {
  // $(".results").text(`${$(textfields[0]).val()} ${$(textfields[1]).val()} ${$(textfields[2]).val()} ${$(textfields[3]).val()}`)
  getTextValues();
  var resultStr = textItems.join(" ");
  results.text(`${resultStr}`);
});