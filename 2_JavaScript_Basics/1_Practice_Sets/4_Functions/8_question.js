// Write a function that returns another function. The inner function should have access to a variable from the outer function.

function outerFunc() {
  let x = 10;

  function innerFunc() {
    let y = 5;
    x = x + y;

    return x;
  }

  return innerFunc();
}

console.log(outerFunc());