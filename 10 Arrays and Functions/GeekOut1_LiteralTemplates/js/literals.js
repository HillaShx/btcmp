// 1

var x = 3;
var y = 6;
var sum_str = `x is ${x} and y is ${y}`;
console.assert(sum_str === 'x is 3 and y is 6');

// 2

function getSum(x,y) {
  return x+y;
}
var sum_str = `the sum of x and y is: ${getSum(x,y)}`;
console.assert(sum_str === 'the sum of x and y is: 9');