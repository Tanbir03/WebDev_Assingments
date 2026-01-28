// Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.
const readlineSync = require("readline-sync");

const x = readlineSync.question("Enter fruit name: ");

switch(x) {
    case "Apple":
        console.log("Pome");
        break;
    case "Mango":
        console.log("Tropical");
        break;
    case "Banana":
        console.log("Berry");
        break;
    default:
        console.log("Not in List")
}