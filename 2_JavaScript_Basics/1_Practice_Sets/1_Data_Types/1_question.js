// Input the distance in Kilometer and Convert into Meter and Centimeter.
const readlineSync = require("readline-sync");

const km = readlineSync.questionFloat("Enter Distance(km): ");

console.log("Distance(m): " + km*100);
console.log("Distance(cm): " + km*10000);