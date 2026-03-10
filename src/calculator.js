// Node.js CLI Calculator
// Supported operations:
// - Addition (+)
// - Subtraction (-)
// - Multiplication (×)
// - Division (÷)

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

// Export functions for use in CLI or other modules
module.exports = {
  add,
  subtract,
  multiply,
  divide
};
