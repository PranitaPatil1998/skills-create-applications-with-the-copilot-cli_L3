// Node.js CLI Calculator
// Supported operations:
// - Addition (+)
// - Subtraction (-)
// - Multiplication (×)
// - Division (÷)
// - Modulo (%)
// - Exponentiation (^)
// - Square Root (√)

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Modulo operation (remainder)
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a % b;
}

// Exponentiation operation (power)
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative numbers is not allowed');
  }
  return Math.sqrt(n);
}

// Export functions for use in CLI or other modules
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};
