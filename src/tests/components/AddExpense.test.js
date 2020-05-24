import React from "react";
import { shallow } from "enzyme";
import { AddExpense } from "../../components/AddExpense";
import expensesMock from "../fixtures/expenses";

/* eslint-disable no-undef */
describe("add expense", () => {
  it("renders", () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpense history={history} onSubmit={onSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });
});
