/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import ExpenseBanner from "../../../components/dashboard/ExpenseBanner";

describe("expense banner", () => {
  it("renders", () => {
    const wrapper = shallow(<ExpenseBanner />);
    expect(wrapper).toMatchSnapshot();
  });
});
