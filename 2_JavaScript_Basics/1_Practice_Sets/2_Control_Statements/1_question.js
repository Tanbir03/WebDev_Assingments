// WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."
const readlineSync = require("readline-sync");

const x = readlineSync.question("Enter Value: ");

if(x > 10) {
    console.log(x + " is greater than 10.");
} else {
    console.log(x + " is not greater than 10.");
}