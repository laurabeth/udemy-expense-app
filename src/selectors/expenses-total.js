const getExpensesTotal = (expenses) => {
  if (!expenses || expenses.length === 0) {
    return 0;
  }

  const total = expenses.reduce((total, { amount }) => total + amount, 0);

  return total;
};

export default getExpensesTotal;
