const readlineSync = require("readline-sync");

const n = readlineSync.questionInt("Enter no.: ");

for(let i = 1 ; i <= n ; i++) {
    let stars = "";
    for(let j = 1 ; j <= n ; j++) {
        if(i === 1 || i === n) {
            stars = stars + "*";
        } else if(j === 1 || j === n) {
            stars = stars + "*";
        } else {
            stars = stars + " ";
        }
    }

    console.log(stars);
}