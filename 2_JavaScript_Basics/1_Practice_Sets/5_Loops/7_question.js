// WAP to display the multiplication table (1 to 10) in the console.
const readlineSync = require("readline-sync");

const n = readlineSync.questionInt("Enter no.: ");

for(let i = 1 ; i <= 10 ; i++) {
    console.log(n + " * " + i + " = " + (n*i));
}