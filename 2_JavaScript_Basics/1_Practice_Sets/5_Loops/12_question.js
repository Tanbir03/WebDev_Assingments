const readlineSync = require("readline-sync");

const n = readlineSync.questionInt("Enter no.: ");


for(let i = 1 ; i <= n ; i++) {
    let spaces = "";
    let stars = "";

    for(let j = (n-i) ; j >= 1 ; j--) {
        spaces = spaces + " ";
    }

    for(let j = 1 ; j <= (i*2)-1 ; j++) {
        stars = stars + "*";
    }
    console.log(spaces + stars);
}