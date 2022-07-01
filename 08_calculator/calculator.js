const add = function(x, y) {
	return (x + y)
};

const subtract = function(x, y) {
	return (x - y)
};

/* 
Remember, when calculating totals, you want to initialise
your "total" variable outside of your for loop, and 
execute your return function outside of the for loop 
as well, or else it will only run once.
*/

const sum = function(array) {
  total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i] 
  } 
  return total 
};




const multiply = function(array) {
  total = 1;
  for (i = 0; i < array.length; i++) {
    total *= array[i] 
  } 
  return total 
};

const power = function(x,y) {
  return (x ** y)
};

const factorial = function(x) {
  total = 0
  if (x == 0) {
    return 1 
  } else {
    total += x * factorial(x - 1)
  }
  return total  
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
