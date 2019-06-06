var textfields = $("input");

textfields.on("keyup",function(e) {
  $(".results").text(`${$(textfields[0]).val()} ${$(textfields[1]).val()} ${$(textfields[2]).val()} ${$(textfields[3]).val()}`)
});