/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

describe("header", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Header deauthenticateAsync={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
