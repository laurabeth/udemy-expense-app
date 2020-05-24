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

  it("should render error for invalid form submission", () => {
    const errorText = "Please provide description and amount";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });

    wrapper.update();

    expect(wrapper.find("p").text()).toEqual(errorText);
  });

  it("should set description on input change", () => {
    const value = "new description text";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value } });

    wrapper.update();

    expect(
      wrapper
        .find("input")
        .at(0)
        .props().value,
    ).toEqual(value);
  });

  it("should set note on text area change", () => {
    const value = "new note text";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change", { target: { value } });

    wrapper.update();

    expect(wrapper.find("textarea").props().value).toEqual(value);
  });

  it("should set amount with valid input", () => {
    const value = "12.00";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value } });

    wrapper.update();

    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("value"),
    ).toEqual(value);
  });
  it("should not set amount with invalid input", () => {
    const value = "alphabet";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value } });

    wrapper.update();

    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("value"),
    ).toEqual("");
  });
});
