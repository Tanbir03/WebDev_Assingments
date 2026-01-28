// WAP to input two numbers and perform arithmetic operations on those numbers.
const readlineSync = require("readline-sync");

const n1 = readlineSync.questionFloat("Enter 1st no.: ");
const n2 = readlineSync.questionFloat("Enter 2nd no.: ");

console.log(n1, " + ", n2, " = " + n1+n2);
console.log(n1, " - ", n2, " = " + n1-n2);
console.log(n1, " * ", n2, " = " + n1*n2);
console.log(n1, " / ", n2, " = " + n1/n2);