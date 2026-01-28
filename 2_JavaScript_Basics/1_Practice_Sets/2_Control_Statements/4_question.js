// WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).
const readlineSync = require("readline-sync");

const t = readlineSync.question("Enter Hour(0 - 23): ");

if (t >= 0 && t < 12) {
    console.log("Good Morning!");
} else if (t >= 12 && t < 17) {
    console.log("Good Afternoon!");
} else if (t >= 17 && t < 21) {
    console.log("Good Evening!");
} else if (t >= 21 && t < 24) {
    console.log("Good Night!");
} else {
    console.log("Invalid Input!");
}