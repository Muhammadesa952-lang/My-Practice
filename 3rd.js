// Useful functions for text and string formatting

// Capitalize the first letter of each word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Check if a word is a palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-0]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// Example usage
console.log(capitalizeWords("hello world from javascript"));
console.log(reverseString("JavaScript"));
console.log("Is racecar a palindrome?", isPalindrome("racecar"));
