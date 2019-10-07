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
const editExpense = (id, updates) => {
  return {
    id,
    type: "EDIT_EXPENSE",
    updates,
  };
};
//Set text filter
const setTextFilter = (text = "") => {
  return {
    text,
    type: "SET_TEXT_FILTER",
  };
};
//Sort by date
const sortByDate = () => {
  return {
    sortBy: "date",
    type: "SORT_BY_DATE",
  };
};
//sort by amount
const sortByAmount = () => {
  return {
    sortBy: "amount",
    type: "SORT_BY_AMOUNT",
  };
};
//set start date
const setStartDate = (startDate) => {
  return {
    startDate,
    type: "SET_START_DATE",
  };
};
//set end date
const setEndDate = (endDate) => {
  return {
    endDate,
    type: "SET_END_DATE",
  };
};

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
      return state.map((expense) => {
        return expense.id === action.id ? { ...expense, ...action.updates } : expense;
      });
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: action.sortBy };
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;

  return expenses
    .filter((expense) => {
      const startDateMatch = typeof startDate !== "number" || expense.createdOn >= startDate;
      const endDateMatch = typeof endDate !== "number" || expense.createdOn <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdOn < b.createdOn ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// Store creation
const store = createStore(combineReducers({ expenses: expensesReducer, filters: filtersReducer }));
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const first = store.dispatch(addExpense({ amount: 100, createdOn: -2100, description: "Rent" }));
const second = store.dispatch(addExpense({ amount: 300, createdOn: -1000, description: "Coffee" }));
// store.dispatch(removeExpense({ id: first.expense.id }));
// store.dispatch(editExpense(second.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(-500));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

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
