// Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

function isPrime(n) {
  let x = n, count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count = count + 1;
    }
  }

  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(6));