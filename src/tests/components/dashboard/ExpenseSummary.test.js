/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../../components/dashboard/ExpenseSummary";

describe("expense banner", () => {
  it("renders", () => {
    const wrapper = shallow(<ExpenseSummary numberOf={1} total={100} />);
    expect(wrapper).toMatchSnapshot();
  });

  it.each([
    [13, 8675309, "Viewing 13 expenses, totaling $86,753.09"],
    [2, 789, "Viewing 2 expenses, totaling $7.89"],
    [0, 0, "Viewing 0 expenses, totaling $0.00"],
  ])("displays a correct message", (expenseCount, expenseTotal, message) => {
    const wrapper = shallow(
      <ExpenseSummary numberOf={expenseCount} total={expenseTotal} />,
    );
    expect(wrapper.find("div").text()).toEqual(message);
  });
});
