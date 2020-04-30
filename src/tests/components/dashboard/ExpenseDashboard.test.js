import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboard from "../../../components/dashboard/ExpenseDashboard";

/* eslint-disable no-undef */
describe("expense dashboard", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<ExpenseDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
