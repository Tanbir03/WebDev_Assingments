const readlineSync = require("readline-sync");

const n = readlineSync.questionInt("Enter no.: ");

for(let i = 1 ; i <= n ; i++) {
    let nums = "";
    for(let j = 1 ; j <= i ; j++) {
        nums = nums + j;
    }
    console.log(nums);
}