var userStr = prompt("Please enter a string:");
var userSub = prompt("Please enter a substring:");
var subIndex = userStr.search(userSub);
var result = userStr.slice(0,subIndex) + userStr.slice(subIndex+userSub.length,userStr.length);
alert(result);