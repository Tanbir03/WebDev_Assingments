// Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

const readlineSync = require("readline-sync");

const quantity = readlineSync.questionInt("Enter no. of products: ");
const rate = readlineSync.questionFloat("Enter rate of the product: ");
const tamount = quantity*rate;

console.log("Total Amount: " + tamount);
console.log("Discount Amount: " + (tamount - (tamount*0.10)));