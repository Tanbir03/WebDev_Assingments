const obj = {a: 10, b: 50, c: 20};
let maxVal = 0;

for(let key in obj) {
    if(obj[key] > maxVal) {
        maxVal = obj[key];
        maxKey = key;
    }
}

console.log(maxKey);