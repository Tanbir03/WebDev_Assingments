// WAP to input n numbers and log the average of those number.
const readlineSync = require("readline-sync");

const arr = readlineSync.question("Enter Numbers(space separated): ").split(' ').map(Number);

let sum = 0;

for(let i = 0 ; i < (arr.length) ; i++) {
    sum = sum + arr[i];
}

console.log("Average of Numbers: " + sum/(arr.length));