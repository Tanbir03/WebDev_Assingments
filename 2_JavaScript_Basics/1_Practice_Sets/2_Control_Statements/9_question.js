// WAP that classifies a number as positive, negative, even, or odd.
const readlineSynce = require("readline-sync");

const x = readlineSynce.questionFloat("Enter Number: ");

if(x % 2 == 0) {
    if(x > 0) {
        console.log("The number is positive and even.");
    } else if(x < 0) {
        console.log("The number is negative and even.");
    } else {
        console.log("The number is " + x + " which is even.");
    }
} else {
    if(x > 0) {
        console.log("The number is positive and odd.");
    } else if(x < 0) {
        console.log("The number is negative and odd.");
    }
}