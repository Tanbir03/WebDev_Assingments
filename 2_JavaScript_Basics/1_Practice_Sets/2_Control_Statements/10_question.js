// WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."
const readlineSync = require("readline-sync");

const x = readlineSync.question("Enter Username: ");

if(x.length < 6) {
    console.log("Username too short!");
} else if(x.length > 15) {
    console.log("Username too long!");
} else {
    console.log("Username accepted!");
}