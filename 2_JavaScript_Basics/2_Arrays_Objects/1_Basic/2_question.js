const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const totalFruits = fruits.reduce(function(acc, fruit) {
  if(acc[fruit]) {
    acc[fruit] = acc[fruit] + 1;
  } else {
    acc[fruit] = 1;
  }

  return acc;
}, {}); //reduce(callbackFunc(), {});

console.log(totalFruits);