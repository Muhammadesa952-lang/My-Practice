// alert("Assalam O alakom!"); //it give message as a top-up.

// let name = prompt("What is your name?");
// console.log(name); //it give mesage to the user and also take a message or input from the user.

// //Let's Practice

// let num = prompt("Enter a number:");
// if (num % 5 === 0) {
//   console.log(num, "num is a multiple of 5");
// } else {
//   console.log(num, "num is not multiple of 5");
// }

// let numb = prompt("Enter a number:");
// if (numb % 7 === 0) {
//   console.log(numb, "is a multiple of 7");
// } else {
//   console.log(numb, "is not multiple of 7");
// }

// Giving a Grade to the students according to their marks.

let score = prompt("Enter your score(0-100)");
let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "Fail and doing more study";
}

console.log("According to your scores, your grade is:", grade);

//Conditional Statments

let age = 20;

if (age >= 20) {
  console.log("you are eligible for vote");
}

if (age < 20) {
  console.log("you are not eligible for vote");
}

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}

if (mode === "light") {
  color = "white";
}

console.log(color); //Ans: should be black.

if (mode === "dark") {
  color = "blue";
} else {
  color = "green";
}

console.log(color);

age = 19.99;
if (age >= 20) {
  console.log("You can vote");
} else {
  console.log("You can't vote b/c you're under 20");
}

//Let's Check the numbers are odd or even?

let num = 2827272610;

if (num % 2 === 0) {
  console.log(num, " The number is even");
} else {
  console.log(num, "  The number is odd");
}

//else-if Statment

let ages = 37;

if (ages < 18) {
  console.log("Junior");
} else if (ages > 60) {
  console.log("Senior");
} else {
  console.log("Middle");
}

let modes = "pink";
color;

if (modes === "dark") {
  color = "Black";
} else if (modes === "light") {
  color = "white";
} else if (modes === "pink") {
  color = "Pink";
} else if (modes === "blue") {
  color = "Blue";
} else {
  color = "Green";
}

console.log(color);

//Ternary Operator:

let aage = 16;
let result = aage >= 18 ? "adult" : "not adult";
console.log(result);
