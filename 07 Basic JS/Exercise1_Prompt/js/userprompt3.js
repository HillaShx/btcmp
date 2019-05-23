var firstString = prompt("Enter the first string:");
var secondString = prompt("Enter the second string");
if (firstString.toLocaleLowerCase() === secondString.toLocaleLowerCase()) {
  console.log("the strings are equal");
} else {
  console.log("the strings are not equal");
}