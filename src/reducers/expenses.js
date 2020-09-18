const defaultExpenses = [];

const expensesReducer = (state = defaultExpenses, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        return expense.id === action.id ? { ...expense, ...action.updates } : expense;
      });
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};

export default expensesReducer;
