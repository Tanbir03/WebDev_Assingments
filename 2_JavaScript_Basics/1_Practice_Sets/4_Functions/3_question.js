// Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

function hourGreet(h) {
  if (0 <= h && h < 12) {
    console.log("Good Morning!");
  } else if (12 <= h && h < 17) {
    console.log("Good Afternoon!");
  } else if (17 <= h && h < 21) {
    console.log("Good Evening!");
  } else if (21 <= h && h < 24) {
    console.log("Good Night!");
  } else {
    console.log("Invalid Input!");
  }
}

hourGreet(25);