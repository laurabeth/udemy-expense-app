const getExpensesTotal = (expenses) => {
  console.log(expenses);
  if (expenses.length === 0) {
    return 0;
  }

  return expenses.reduce((total, expense) => total + expense.amount);
};

export default getExpensesTotal;
