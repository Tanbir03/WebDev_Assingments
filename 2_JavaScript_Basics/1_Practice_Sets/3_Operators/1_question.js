// Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).
const readlineSync = require("readline-sync");

const a = readlineSync.questionInt("Enter 1st no.: ");
const b = readlineSync.questionInt("Enter 2nd no.: ");

console.log(a + " + " + b + " = " + (a+b));
console.log(a + " - " + b + " = " + (a-b));
console.log(a + " * " + b + " = " + (a*b));
console.log(a + " / " + b + " = " + (a/b));