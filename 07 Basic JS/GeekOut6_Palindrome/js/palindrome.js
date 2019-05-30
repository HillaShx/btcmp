var str = prompt("Please enter a string");

function isPalindrome(str) {
  var palindrome = true;
  var j = str.length-1;
  for (var i=0; i<j+1; i++) {
    if (str.charAt(i) !== str.charAt(j)) {
      palindrome = false;
    }
    j--;
  }
  if (palindrome) {
    alert("This string is a palindrome");
  } else {
    alert("This string is not a palindrome");
  }
}

isPalindrome(str);