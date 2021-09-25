// Only change code below this line
function sumFibonacci(num) {
  var previous = 0;
  var current = 1;
  var sum = 0;

  while (current <= num) {
    if (num === 1) {
      return 1;
    }
    if (current % 2 !== 0) {
      sum = sum + current;
    }
    current = current + previous;
    previous = current - previous;
  }

  return sum;
}

// Only change code above this line

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
