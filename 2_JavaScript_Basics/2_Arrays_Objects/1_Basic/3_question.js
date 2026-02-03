const initial = {a: "x", b: "y", c: "z"};
const swapped = {};

for (let i = 0; i < Object.keys(initial).length; i++) {
    key = Object.keys(initial)[i];
    value = Object.values(initial)[i];

    swapped[value] = key;
}

console.log(swapped);