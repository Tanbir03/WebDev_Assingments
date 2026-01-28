// WAP to categorize a given temperature into "low," "medium," or "high" ranges.
const readlineSynce = require("readline-sync");

const temp = readlineSynce.questionFloat("Enter temp.(0 - 100): ");

if(0 <= temp && temp < 60) {
    console.log("Low Temperature");
} else if(60 <= temp && temp < 80) {
    console.log("Medium Temperature");
} else if(80 <= temp && temp < 100) {
    console.log("High Temperature");
} else {
    console.log("Out of range!");
}