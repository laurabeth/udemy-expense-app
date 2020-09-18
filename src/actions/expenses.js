import database from "../firebase/firebase";

// component calls the action generator
// action generator returns an object
// component dispatches object
// redux store changes

export const addExpense = (expense) => {
  return {
    expense,
    type: "ADD_EXPENSE",
  };
};

export const addExpenseAsync = (data = {}) => {
  return (dispatch) => {
    const { amount = 0, createdOn = 0, description = "", note = "" } = data;
    const expense = { amount, createdOn, description, note };
    const ref = database.ref("expenses").push(expense);
    dispatch(
      addExpense({
        id: ref.key,
        ...expense,
      }),
    );
  };
};

export const removeExpense = ({ id } = {}) => {
  return {
    id,
    type: "REMOVE_EXPENSE",
  };
};

export const removeExpenseAsync = ({ id }) => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .child(id)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editExpense = (id, updates) => {
  return {
    id,
    type: "EDIT_EXPENSE",
    updates,
  };
};

export const editExpenseAsync = (id, updates) => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .child(id)
      .set({ ...updates })
      .then(dispatch(editExpense(id, updates)));
  };
};

export const setExpenses = (expenses) => ({
  expenses,
  type: "SET_EXPENSES",
});

export const setExpensesAsync = () => {
  return (dispatch) => {
    const expenses = [];
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((child) => {
          expenses.push({
            id: child.key,
            ...child.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
