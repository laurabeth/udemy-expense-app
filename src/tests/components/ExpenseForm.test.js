import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expensesMock from "../fixtures/expenses";

/* eslint-disable no-undef */
describe("expense form", () => {
  it("renders with default data", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with provided data", () => {
    const wrapper = shallow(<ExpenseForm expense={expensesMock[1]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
