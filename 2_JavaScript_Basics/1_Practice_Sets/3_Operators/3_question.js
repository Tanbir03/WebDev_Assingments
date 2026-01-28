// Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.
const readlineSync = require("readline-sync");

let x = readlineSync.questionInt("Enter 1st no.: ");
let y = readlineSync.questionInt("Enter 2nd no.: ");

if(x > y) {
    console.log(x + " is greater.");
} else if(y > x){
    console.log(y + " is greater.");
} else {
    console.log("Both are equal.")
}