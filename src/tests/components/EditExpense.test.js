/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { EditExpense } from "../../components/EditExpense";
import expenses from "../fixtures/expenses";

let editExpenseAsyncMock, history, removeExpense, wrapper;
beforeEach(() => {
  editExpenseAsyncMock = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      editExpenseAsync={editExpenseAsyncMock}
      expense={expenses[2]}
      history={history}
      removeExpenseAsync={removeExpense}
    />,
  );
});

describe("edit expense", () => {
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("handles submit edit", () => {
    const edits = { note: "test note" };
    wrapper.find("ExpenseForm").prop("submitExpense")(edits);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editExpenseAsyncMock).toHaveBeenLastCalledWith(expenses[2].id, edits);
  });

  it("handles remove expense", () => {
    wrapper.find("button").prop("onClick")();
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id);
  });
});
