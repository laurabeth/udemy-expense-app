/* eslint-disable no-undef */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import { Header } from "../../components";

describe("header", () => {
  it("renders without crashing", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    console.log(renderer.getRenderOutput());
  });
});
