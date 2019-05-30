var userExpression = prompt("Enter a string of words:");
var existingWord = prompt("Enter word you'd like to replace:");
var replacedWord = prompt("Enter the word you would like to replace it with:");

function getArray(userExpression) {
  var expressionArray = [];
  var currIndex = 0;
  for (i = 0; i < userExpression.length; i++) {
    var word = "";
    while ((userExpression[i] != " ") && (i<userExpression.length)) {
      word+=userExpression[i];
      i++;
    }
    expressionArray[currIndex] = word;
    currIndex++;
  }
  return expressionArray;
}

function getIndex(arr,word) {
  var wordIndex = -1;
  for (i = 0; i < expressionArray.length; i++) {
    if (expressionArray[i] === existingWord) {
      wordIndex = i;
    }
  }
  return wordIndex;
}

function replaceItemInArray(arr,index) {
  var newStringArray = expressionArray;
  for (i = 0; i < expressionArray.length; i++) {
    if (i === wordIndex) {
      newStringArray[i] = replacedWord;
    }
  }
  return newStringArray;
}

function getString(arr) {
  var newString = "";
  for (i = 0; i < newStringArray.length; i++) {
    if (i === 0) {
      newString+=newStringArray[i];
    } else {
      newString+=" "+newStringArray[i];
    }
  }
  return newString;
}

var expressionArray = getArray(userExpression);
var wordIndex = getIndex(expressionArray,existingWord);

if (wordIndex != -1) {
  // expressionArray.splice(wordIndex, 1, replacedWord);
  var newStringArray = replaceItemInArray(expressionArray,wordIndex);
  var newString = getString(newStringArray);
  console.log(newString);
} else {
  console.log("Couldn't find the word \""+existingWord+"\" in \""+userExpression+"\"");  
}

