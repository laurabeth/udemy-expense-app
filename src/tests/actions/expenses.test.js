/* eslint-disable no-undef */
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  addExpense,
  addExpenseAsync,
  editExpense,
  removeExpense,
  setExpenses,
  setExpensesAsync,
} from "../../actions";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const getMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ amount, createdOn, description, id, note }) => {
    expenseData[id] = { amount, createdOn, description, note };
  });
  database
    .ref("expenses")
    .set(expenseData)
    .then(() => done());
});

describe("remove expense tests", () => {
  it("should set up remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({ id: "123abc", type: "REMOVE_EXPENSE" });
  });
});

describe("edit expense tests", () => {
  it("should set up edit expense action object", () => {
    const action = editExpense("abc123", { note: "test" });
    expect(action).toEqual({
      id: "abc123",
      type: "EDIT_EXPENSE",
      updates: { note: "test" },
    });
  });
});

describe("add expense tests", () => {
  it("should set up add expense action object with provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
      expense: expenses[2],
      type: "ADD_EXPENSE",
    });
  });

  it("should add expense to store", async (done) => {
    const mockStore = getMockStore({});
    const expenseData = {
      amount: "12000",
      createdOn: 1000,
      description: "Mouse",
      note: "Glorious",
    };

    mockStore.dispatch(addExpenseAsync(expenseData)).then(() => {
      const actions = mockStore.getActions();
      expect(actions[0]).toEqual({
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
        type: "ADD_EXPENSE",
      });
      done();
    });
  });

  it("should add expense with defaults to store", async (done) => {
    const mockStore = getMockStore({});
    mockStore.dispatch(addExpenseAsync()).then(() => {
      const actions = mockStore.getActions();
      expect(actions[0]).toEqual({
        expense: {
          amount: 0,
          createdOn: 0,
          description: "",
          id: expect.any(String),
          note: "",
        },
        type: "ADD_EXPENSE",
      });
      done();
    });
  });
});

describe("set expenses", () => {
  it("should set up set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      expenses,
      type: "SET_EXPENSES",
    });
  });

  it("should fetch the expenses from firebase", (done) => {
    const store = getMockStore({});
    store.dispatch(setExpensesAsync()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        expenses,
        type: "SET_EXPENSES",
      });
      done();
    });
  });
});
