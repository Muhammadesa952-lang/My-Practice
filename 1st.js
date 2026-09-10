// A simple module for basic mathematical operations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Example usage
console.log("Add: ", add(10, 5));
console.log("Divide: ", divide(10, 2));
