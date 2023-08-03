const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item, 1);
};

const power = function(a, b) {
	let result = 1;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }

  return result;
};

const factorial = function(number) {
  let result = 1;

  if (number === 0) {
    return 1;
  }
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  
  return result;
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
