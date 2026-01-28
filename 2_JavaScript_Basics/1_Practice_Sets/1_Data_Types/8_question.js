// WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.
const readlineSync = require("readline-sync");

const ftemp = readlineSync.questionFloat("Enter temp. in farenheit: ");

const ctemp = ((ftemp-32)*(5/9)).toFixed(2);

console.log("Temp in centigrade: " + ctemp);