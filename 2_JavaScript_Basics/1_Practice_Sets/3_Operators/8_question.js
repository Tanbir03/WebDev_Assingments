// Write a JavaScript program to use string operators to concatenate two strings.
const readlineSync = require("readline-sync");

let fname = readlineSync.question("Enter fisrt name: ");
let lname = readlineSync.question("Enter last name: ");

console.log(fname + lname);
console.log((fname += lname));