/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { AddExpense } from "../../components/AddExpense";
import expenses from "../fixtures/expenses";

let addExpenseAsync, history, wrapper;
beforeEach(() => {
  addExpenseAsync = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpense addExpenseAsync={addExpenseAsync} history={history} />);
});

describe("add expense", () => {
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle addExpense", () => {
    wrapper.find("ExpenseForm").prop("submitExpense")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(addExpenseAsync).toHaveBeenLastCalledWith(expenses[1]);
  });
});
