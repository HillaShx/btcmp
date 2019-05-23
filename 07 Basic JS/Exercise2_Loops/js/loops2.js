var userIn = prompt("Enter a string: ");
var inArray = userIn.split("");
var flippedIn = "";
for (var x = 0; x < userIn.length; x++) {
  flippedIn += inArray.pop(inArray[-1]);
}
console.log(flippedIn);
