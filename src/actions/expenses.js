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
    database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          }),
        );
      });
  };
};

export const removeExpense = ({ id } = {}) => {
  return {
    id,
    type: "REMOVE_EXPENSE",
  };
};

export const removeExpenseAsync = () => {};

export const editExpense = (id, updates) => {
  return {
    id,
    type: "EDIT_EXPENSE",
    updates,
  };
};
