// WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.
const readlineSync = require("readline-sync");

rNum = Math.floor(Math.random() * 10 + 1);

while (true) {
  const gNum = readlineSync.questionInt("Guess a no.(1 - 10): ");

  if (gNum == rNum) {
    console.log("Bravo! You guessed the write number.");
    break;
  } else {
    console.log("Oops! Try again.");
  }
}