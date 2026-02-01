const expenses = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60],
};

function sum(n) {
  let s = 0;
  for (let i = 0; i < n.length; i++) {
    s = s + n[i];
  }

  return s;
}

const totalExpenses = {
    food: sum(expenses.food),
    travel: sum(expenses.travel),
    bills: sum(expenses.bills)
}

console.log(totalExpenses);