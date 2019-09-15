import { combineReducers, createStore } from "redux";
import uuid from "uuid";

//Add Expense
const addExpense = ({ amount = 0, createdOn = 0, description = "", note = "" } = {}) => ({
  expense: {
    amount: amount,
    createdOn: createdOn,
    description: description,
    id: uuid(),
    note: note,
  },
  type: "ADD_EXPENSE",
});
//Remove Expense
const removeExpense = ({ id } = {}) => {
  return {
    id,
    type: "REMOVE_EXPENSE",
  };
};
//Edit Expense
const editExpense = ({ expense } = {}) => {
  return {
    expense: { ...expense },
    type: "EDIT_EXPENSE",
  };
};
//Set text filter
//Sort by date
//sort by amount
//set start date
//set end date

const defaultExpenses = [];
const defaultFilters = {
  endDate: undefined,
  sortBy: "date",
  startDate: undefined,
  text: "",
};

const expensesReducer = (state = defaultExpenses, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      return [...state, ...action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(combineReducers({ expenses: expensesReducer, filters: filtersReducer }));
const unsubscribe = store.subscribe(() => console.log(store.getState()));

const first = store.dispatch(addExpense({ amount: 100, description: "Rent" }));
store.dispatch(addExpense({ amount: 300, description: "Coffee" }));
store.dispatch(removeExpense({ id: first.expense.id }));

unsubscribe();

const demoState = {
  expenses: [
    {
      amount: "60000",
      createdOn: undefined,
      description: "January Rent",
      id: "oichildihe",
      note: "last payment",
    },
  ],
  filters: {
    endDate: undefined,
    sortBy: "date",
    startDate: undefined,
    text: "",
  },
};
