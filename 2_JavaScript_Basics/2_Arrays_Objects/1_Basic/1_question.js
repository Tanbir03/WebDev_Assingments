const expenses = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60],
};

const total = {};

for (let key in expenses) {
  let sum = 0;
  
  expenses[key].forEach(function(cost) {
    sum = sum + cost;
  });

  total[key] = sum;
}

console.log(total);