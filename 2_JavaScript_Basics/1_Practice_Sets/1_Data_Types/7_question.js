// WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.
const readlineSync = require("readline-sync");

const dis = readlineSync.questionFloat("Enter Distance between 2 citites: ");

console.log("Distance between 2 citites: ");
console.log((dis*100) + "m");
console.log((dis*3280.84) + "ft");
console.log((dis*39,370.1) + "in");
console.log((dis*10000) + "cm");