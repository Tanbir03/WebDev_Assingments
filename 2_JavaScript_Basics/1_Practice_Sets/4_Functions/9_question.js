//  Write a recursive function to calculate the factorial of a given number.

function recFact(n) {
    if(n === 0) {
        return 1;
    }

    return n * recFact(n-1);
}

console.log(recFact(3));