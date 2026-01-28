// WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
const readlineSync = require("readline-sync");

const x = readlineSync.questionInt("Enter week no.: ");

switch(x) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Input!")
}