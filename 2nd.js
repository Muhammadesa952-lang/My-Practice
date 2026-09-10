// Array manipulation helper functions

// Remove duplicates from an array
function getUniqueItems(arr) {
  return [...new Set(arr)];
}

// Find the maximum number in an array
function findMax(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

// Calculate the average of a numbers array
function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

// Example usage
const numbers = [5, 12, 5, 8, 12, 20];
console.log("Unique:", getUniqueItems(numbers));
console.log("Max:", findMax(numbers));
console.log("Average:", calculateAverage(numbers));
