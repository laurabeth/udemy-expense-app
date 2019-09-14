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
//Edit Expense
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
store.subscribe(() => console.log(store.getState()));

store.dispatch(addExpense({ amount: 100, description: "Rent" }));

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
