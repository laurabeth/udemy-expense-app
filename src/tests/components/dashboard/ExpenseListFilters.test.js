/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../../components/dashboard/ExpenseListFilters";
import filters from "../../fixtures/filters";

let setTextFilter,
  sortByAmountAscending,
  sortByAmountDescending,
  sortByDateAscending,
  sortByDateDescending;

beforeEach(() => {
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

  it("should handle text changes", () => {
    const value = "test filter";
    const wrapper = renderExpenseListFilters(filters[1]);
    wrapper.find("input").simulate("change", {
      event: { target: { value } },
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });
  it("should sort by date", () => {});
  it("should sort by amount", () => {});
  it("should handle date changes", () => {});
  it("should handle date focus changes", () => {});
});

const renderExpenseListFilters = (f) =>
  shallow(
    <ExpenseListFilters
      filters={f}
      setTextFilter={setTextFilter}
      sortByAmountAscending={sortByAmountAscending}
      sortByAmountDescending={sortByAmountDescending}
      sortByDateAscending={sortByDateAscending}
      sortByDateDescending={sortByDateDescending}
    />,
  );
