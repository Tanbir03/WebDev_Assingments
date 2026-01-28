// Write a JavaScript program to perform bitwise operations on two numbers.
const readlineSync = require("readline-sync");

let b = readlineSync.questionInt("Enter 1st no.: ");
let c = readlineSync.questionInt("Enter 2nd no.: ");

console.log(b & c);

console.log(b | c);

console.log(b ^ c);

console.log(~b);

console.log(b << 2);

console.log(b >> 2);

console.log(b >>> 2);