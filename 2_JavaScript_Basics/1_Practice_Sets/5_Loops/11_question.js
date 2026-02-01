const readlineSync = require("readline-sync");

const n = readlineSync.questionInt("Enter no.: ");

for(let i = 1 ; i <= n ; i++) {
    let stars = "";
    for(let j = 1 ; j <= i ; j++) {
        stars = stars + "*";
    }
    console.log(stars);
}