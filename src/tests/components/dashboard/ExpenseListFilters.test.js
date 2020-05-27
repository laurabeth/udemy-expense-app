/* eslint-disable no-undef */
import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../../components/dashboard/ExpenseListFilters";
import filters from "../../fixtures/filters";

let setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmountAscending,
  sortByAmountDescending,
  sortByDateAscending,
  sortByDateDescending;

beforeEach(() => {
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  setTextFilter = jest.fn();
  sortByAmountAscending = jest.fn();
  sortByAmountDescending = jest.fn();
  sortByDateAscending = jest.fn();
  sortByDateDescending = jest.fn();
});

describe("expense list filters", () => {
  it("renders with undefined filters", () => {
    const wrapper = renderExpenseListFilters(filters[0]);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders with defined filters", () => {
    const wrapper = renderExpenseListFilters(filters[1]);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call set text with provided value", () => {
    const value = "test filter";
    const wrapper = renderExpenseListFilters(filters[1]);
    wrapper.find("input").simulate("change", { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });

  it("should call sort by date asc", () => {
    const wrapper = renderExpenseListFilters(filters[1]);
    wrapper.find("select").simulate("change", { target: { value: "date_asc" } });
    expect(sortByDateAscending).toHaveBeenCalled();
  });

  it("should call sort by date desc", () => {
    const wrapper = renderExpenseListFilters(filters[1]);
    wrapper.find("select").simulate("change", { target: { value: "date_desc" } });
    expect(sortByDateDescending).toHaveBeenCalled();
  });

  it("should call sort by amount asc", () => {
    const wrapper = renderExpenseListFilters(filters[1]);
    wrapper.find("select").simulate("change", { target: { value: "amount_asc" } });
    expect(sortByAmountAscending).toHaveBeenCalled();
  });

  it("should call sort by amount desc", () => {
    const wrapper = renderExpenseListFilters(filters[1]);
    wrapper.find("select").simulate("change", { target: { value: "amount_desc" } });
    expect(sortByAmountDescending).toHaveBeenCalled();
  });

  it("should handle date changes", () => {
    const startDate = moment(0).add(1, "year");
    const endDate = moment(0)
      .add(1, "year")
      .add(5, "days");
    const wrapper = renderExpenseListFilters(filters[1]);

    wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
      startDate,
      // eslint-disable-next-line sort-keys
      endDate,
    });
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  });
});

const renderExpenseListFilters = (f) =>
  shallow(
    <ExpenseListFilters
      filters={f}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      setTextFilter={setTextFilter}
      sortByAmountAscending={sortByAmountAscending}
      sortByAmountDescending={sortByAmountDescending}
      sortByDateAscending={sortByDateAscending}
      sortByDateDescending={sortByDateDescending}
    />,
  );
