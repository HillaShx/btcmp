var userIn = prompt("Enter something:");
var result;
if (!isNaN(userIn)) {
  var userInt = parseInt(userIn);
  result = userInt + 5;
} else {
  result = userIn + "!!!";
}
console.log(result);