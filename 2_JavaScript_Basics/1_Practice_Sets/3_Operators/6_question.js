// Write a JavaScript program to use the ternary operator to determine the larger of two numbers.
const readlineSync = require("readline-sync");

const x = readlineSync.questionInt("Enter 1st no.: ");
const y = readlineSync.questionInt("Enter 2nd no.: ");

let result = x > y ? x + " is larger" : y + " is larger";

console.log(result);