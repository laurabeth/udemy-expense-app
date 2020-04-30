/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import NotFound from "../../components/NotFound";

describe("not found", () => {
  it("renders", () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
