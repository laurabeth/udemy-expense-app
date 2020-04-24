/* eslint-disable no-undef */
import { addExpense, editExpense, removeExpense } from "../../actions";
import moment from "moment";

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
    const expenseData = {
      amount: 4200,
      createdOn: moment("1/1/2020"),
      description: "test description",
      note: "test note",
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
      expense: {
        ...expenseData,
        id: expect.any(String),
      },
      type: "ADD_EXPENSE",
    });
  });
  it("should set up add expense action object with default values", () => {
    const action = addExpense();
    expect(action).toEqual({
      expense: {
        amount: 0,
        createdOn: 0,
        description: "",
        id: expect.any(String),
        note: "",
      },
      type: "ADD_EXPENSE",
    });
  });
});
