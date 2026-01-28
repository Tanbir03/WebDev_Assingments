// Write a JavaScript program to demonstrate the use of assignment operators on variables.

const readlineSync = require("readline-sync");

let x = readlineSync.questionInt("Enter 1st no.: ");
let y = readlineSync.questionInt("Enter 2nd no.: ");

x += y;
console.log(x);

x -= y;
console.log(x);

x *= y;
console.log(x);

x /= y;
console.log(x);

x %= y;
console.log(x);

x **= y;
console.log(x);