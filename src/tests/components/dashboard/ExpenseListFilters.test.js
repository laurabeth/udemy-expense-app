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
  //should handle text change
  //should sort by date
  //should sort by amount
  //should handle date changes
  //should hanlde date focus changes
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
