const { add, subtract, multiply, divide } = require('../utils/math');

function calculator(a, b, operation) {
  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      if (b === 0) throw new Error('Cannot divide by zero');
      return divide(a, b);
    default:
      throw new Error('Invalid operation');
  }
}

module.exports = { calculator };
