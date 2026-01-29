// Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

const globalVar =
  "This is Global Variable. (can be called anywhere througout the code.)";

function locVar() {
  const localVar =
    "This is Local Variable. (can only be called inside the function where it was initialized.)";

  console.log(localVar);
}

function gloVar() {
  console.log(globalVar);
}

locVar();
gloVar();