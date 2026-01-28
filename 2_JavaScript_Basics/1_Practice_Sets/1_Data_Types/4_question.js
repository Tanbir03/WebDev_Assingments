// WAP to calculate total marks in two subject and then calculate percentage.
const readlineSync = require("readline-sync");

const s1 = readlineSync.questionFloat("Enter 1st Sub Marks: ");
const s2 = readlineSync.questionFloat("Enter 2nd Sub Marks: ");

console.log("Total Obtained Marks: " + (s1+s2));
console.log("Total Obtained Percentage: " + (((s1+s2)/200)*100) + "%");