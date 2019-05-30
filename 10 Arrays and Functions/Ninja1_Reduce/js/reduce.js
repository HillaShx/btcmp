function getMax (arr) {
  return arr.reduce((total,item) => total < item ? item : total);
}

function getSumEven (arr) {
  return arr.reduce((total,item) => item % 2 === 0 ? total+item : 0);
}

function getAverage (arr) {
  return arr.reduce((total,item) => total+item) / arr.length;
}