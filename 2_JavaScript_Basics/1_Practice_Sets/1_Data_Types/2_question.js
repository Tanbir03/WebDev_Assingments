// WAP to input radius of a circle and log the area of circle.
const readlineSync = require("readline-sync");

const r = readlineSync.questionFloat("Enter Radius: ");

console.log("Radius of Circle: " + 3.14*r*r);