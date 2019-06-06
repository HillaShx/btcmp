var ul = $("<ul/>");
for (var i=0; i<5; i++) {
  var currLi = $("<li/>");
  currLi.text(`list item ${i+1}`);
  ul.append(currLi);
}
$("body").append(ul);