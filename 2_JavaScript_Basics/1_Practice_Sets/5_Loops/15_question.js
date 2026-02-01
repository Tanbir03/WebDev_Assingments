const readlineSync = require("readline-sync");

const n = readlineSync.questionInt("Enter no.: ");
let char = 'A';

for(let i = 1 ; i <= n ; i++) {
    let spaces = "";
    let chars = '';

    for(let j = (n-i) ; j >= 1 ; j--) {
        spaces = spaces + " ";
    }

    for(let j = 1 ; j <= (i*2)-1 ; j++) {
        chars = chars + char;
    }
    char = String.fromCharCode(char.charCodeAt(0) + 1);
    console.log(spaces + chars);
}