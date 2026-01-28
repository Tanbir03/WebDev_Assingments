// Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.
const readlineSync = require("readline-sync");

const a = readlineSync.questionFloat("Enter Amount: ");
const i = readlineSync.questionFloat("Enter Interest Rate: ");
const y = readlineSync.questionFloat("Enter no. of Years: ");

const si = (a*i*y)/100;

console.log("Interest will be: " + si);