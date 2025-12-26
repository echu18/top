const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) ) {
    return 'ERROR';
  }

  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  // without using min/max functions, can use this instead - if (min > max) [min, max] = [max, min];
  
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
