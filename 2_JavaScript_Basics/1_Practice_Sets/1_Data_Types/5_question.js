// WAP to input the length and breath of rectangle and calculate the area and perimeter of rectangle.
const readlineSync = require("readline-sync");

const length = readlineSync.questionFloat("Enter Length: ");
const breath = readlineSync.questionFloat("Enter Breath: ");

console.log("Area: " + length*breath);
console.log("Perimeter: " + 2*(length+breath));