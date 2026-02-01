// WAP to identify and log prime numbers within a given range.
const readlineSync = require("readline-sync");

const n = readlineSync.questionInt("Enter starting range: ");
const m = readlineSync.questionInt("Enter ending range: ");

for(let i = n ; i <= m ; i++) {
    let count = 0;
    for(let j = 1 ; j <= i ; j++) {
        if(i % j === 0) {
            count++;
        }
    }
    if(count === 2) {
        console.log(i);
    }
}