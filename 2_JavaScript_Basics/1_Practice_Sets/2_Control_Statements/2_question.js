// WAP that check that if an user is illegible for drive a car or not ( take user age as input).
const readlineSync = require("readline-sync");

const age = readlineSync.question("Enter Age: ");

if(age >= 18) {
    console.log("Person eligible for driving.");
} else {
    console.log("Person not eligible for driving.");
}