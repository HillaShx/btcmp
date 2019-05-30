var firstString = prompt("Enter the first string:");
var secondString = prompt("Enter the second string");
var re = new RegExp(secondString+'$');
if (firstString.match(re)) {
  console.log(true);
} else {
  console.log(false);
}