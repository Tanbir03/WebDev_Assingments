// Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

function exponent(n, m) {
    let x = 1;
  for (let i = 0; i < m; i++) {
    x = x * n;
  }

  return x;
}

console.log(exponent(5, 3));