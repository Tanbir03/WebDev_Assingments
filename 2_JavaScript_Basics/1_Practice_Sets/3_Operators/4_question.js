// Write a JavaScript program to demonstrate logical operators in a conditional statement.
const readlineSync = require("readline-sync");

const hasCard = readlineSync.keyInYN("Do you have library card? ");
const age = readlineSync.questionInt("What's your age?: ");
const isWeekend = readlineSync.keyInYN("Is today weekend? ");
const hasGuestPass = readlineSync.keyInYN("Do you have guest pass? ");
const isBanned = readlineSync.keyInYN("Are you banned from library? ");

if(!isBanned) {
    if(age > 5 && hasCard) {
        console.log("You can enter with your library card.");
    } else if(age > 5 && (hasGuestPass || isWeekend)) {
        console.log("You can enter as a guest.");
    } else {
        console.log("Sorry you can't enter.");
    }
} else {
    console.log("You are banned from this library.");
}