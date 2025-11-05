// mathModule.js----------------
// User-defined module for basic arithmetic operations
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
  if (b === 0) return 'Division by zero not allowed';
  return a / b;
}
// Export functions to make them accessible in other files
module.exports = {
  add,
  subtract,
  multiply,
  divide
};
