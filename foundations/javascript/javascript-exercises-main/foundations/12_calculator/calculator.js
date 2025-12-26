const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let total = 0;

  array.forEach(item => total += item);

  return total;
};

const multiply = function(array) {
  if (array.length === 0) return 0;
  
  let total = 1;

  array.forEach(item => total *= item);

  return total;
};

const power = function(base, exp) {
	return base**exp
};

const factorial = function(number) {
	if (number == 0) return 1;

  let total = 1;

  for (let i = total; i <= number; i++) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
