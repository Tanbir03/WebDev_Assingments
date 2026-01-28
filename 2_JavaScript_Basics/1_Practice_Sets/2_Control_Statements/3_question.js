// WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).
const readlineSync = require("readline-sync");

const arr = readlineSync.question("Enter Marks(space separated): ").split(' ').map(Number);
let total = 0;

for(let i = 0 ; i < arr.length ; i++) {
    total = total + arr[i];
}

const grade = total/arr.length;

if (grade >= 90 && grade <= 100) {
    console.log("A");
} else if (grade >= 80 && grade < 90) {
    console.log("B");
} else if (grade >= 70 && grade < 80) {
    console.log("C");
} else if (grade >= 60 && grade < 70) {
    console.log("D"); 
} else if (grade >= 0 && grade < 60) {
    console.log("F");
} else {
    console.log("Invalid Grade!");
}