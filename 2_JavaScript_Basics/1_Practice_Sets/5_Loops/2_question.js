// WAP that log all even numbers from 2 to 20.

function logNum(n) {
  for (i = 1; i <= n; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
  }
}

logNum(20);