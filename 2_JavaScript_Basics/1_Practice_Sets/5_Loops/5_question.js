// WAP that prints powers of 2 (2^n) up to 64.

let pow = 1;

console.log(1);

while(true) {
    if(pow == 64) {
        break;
    }
    
    pow = 2 * pow;
    console.log(pow);
}