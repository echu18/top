const fibonacci = function(nth) {
  if (nth < 0) return 'OOPS';
  if (nth == 0) return 0;
  if (nth == 1 || nth == 2 ) return 1;

  let fib = [1, 1];

  for (let i = 2; i < nth; i++) {
    fib.push(fib[fib.length-1] + fib[fib.length-2])
  }

  return fib[fib.length-1];
};

// O(n) because it saves the entire array and increases with array size

// Do not edit below this line
module.exports = fibonacci;
