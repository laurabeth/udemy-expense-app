import uuid from "uuid";

export const addExpense = ({ amount = 0, createdOn = 0, description = "", note = "" } = {}) => ({
  expense: {
    amount: amount,
    createdOn: createdOn,
    description: description,
    id: uuid(),
    note: note,
  },
  type: "ADD_EXPENSE",
});

export const removeExpense = ({ id } = {}) => {
  return {
    id,
    type: "REMOVE_EXPENSE",
  };
};

export const editExpense = (id, updates) => {
  return {
    id,
    type: "EDIT_EXPENSE",
    updates,
  };
};