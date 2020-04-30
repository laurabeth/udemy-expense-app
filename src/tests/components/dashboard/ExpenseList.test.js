import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../../components/dashboard/ExpenseList";
import expensesMock from "../../fixtures/expenses";

/* eslint-disable no-undef */
describe("expense list", () => {
  it("renders with data", () => {
    const wrapper = shallow(<ExpenseList expenses={expensesMock} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders without data", () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
