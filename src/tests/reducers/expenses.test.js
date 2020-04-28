/* eslint-disable no-undef */
import { expensesReducer } from "../../reducers";
import expensesMock from "../mocks/expenses";

describe("expenses reducer", () => {
  it("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
  });

  it("should add an expense", () => {
    const state = expensesReducer(undefined, {
      expense: expensesMock[0],
      type: "ADD_EXPENSE",
    });
    expect(state[0]).toEqual(expensesMock[0]);
  });

  it("should edit an expense", () => {
    const action = {
      id: expensesMock[2].id,
      type: "EDIT_EXPENSE",
      updates: { amount: 3200, note: "updated note" },
    };

    const state = expensesReducer(expensesMock, action);
    expect(state[2]).toEqual({ ...expensesMock[2], amount: 3200, note: "updated note" });
  });

  it("should not edit an expense if id not found", () => {
    const action = {
      id: -1,
      type: "EDIT_EXPENSE",
      updates: { amount: 3200, note: "updated note" },
    };

    const state = expensesReducer(expensesMock, action);
    expect(state).toEqual(expensesMock);
  });

  it("should remove expense by id", () => {
    const action = {
      id: expensesMock[1].id,
      type: "REMOVE_EXPENSE",
    };
    const state = expensesReducer(expensesMock, action);
    expect(state).toEqual([expensesMock[0], expensesMock[2]]);
  });

  it("should not remove expense if id not found", () => {
    const action = {
      id: -1,
      type: "REMOVE_EXPENSE",
    };
    const state = expensesReducer(expensesMock, action);
    expect(state).toEqual(expensesMock);
  });
});
