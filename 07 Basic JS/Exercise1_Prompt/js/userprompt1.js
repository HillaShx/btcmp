var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");
var result;
if (firstNumber > secondNumber) {
  if (secondNumber == 0) {
    result = 1;
  }
  result = firstNumber / secondNumber;
} else {
  if (firstNumber == 0) {
    result = 1;
  }
  result = secondNumber / firstNumber;
}
alert("The result is: " + result);