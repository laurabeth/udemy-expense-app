/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../../components/dashboard/ExpenseListItem";
import expensesMock from "../../fixtures/expenses";

describe("expense list item", () => {
  it("renders with data", () => {
    const wrapper = shallow(<ExpenseListItem {...expensesMock[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
