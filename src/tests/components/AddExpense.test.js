/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { AddExpense } from "../../components/AddExpense";
import expenses from "../fixtures/expenses";

let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />);
});

describe("add expense", () => {
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle addExpense", () => {
    wrapper.find("ExpenseForm").prop("submitExpense")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
  });
});
