/* eslint-disable no-undef */
import { getVisibleExpenses } from "../../selectors";
import moment from "moment";
import expenses from "../fixtures/expenses";

const filters = ({
  endDate = undefined,
  sortBy = "date_asc",
  startDate = undefined,
  text = "",
}) => ({
  endDate,
  sortBy,
  startDate,
  text,
});

describe("expenses selector tests", () => {
  it("should filter by text value", () => {
    const result = getVisibleExpenses(expenses, filters({ text: "g" }));
    expect(result).toEqual([expenses[1], expenses[0]]);
  });

  it("should filter by start date", () => {
    const result = getVisibleExpenses(
      expenses,
      filters({ startDate: moment(0).add(1, "day") }),
    );
    expect(result).toEqual([expenses[2]]);
  });

  it("should filter by endDate", () => {
    const result = getVisibleExpenses(
      expenses,
      filters({ endDate: moment(0).subtract(1, "day") }),
    );
    expect(result).toEqual([expenses[1]]);
  });

  it("should sort by date ascending", () => {
    const result = getVisibleExpenses(expenses, filters({ sortBy: "date_asc" }));
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
  });

  it("should sort by date descending", () => {
    const result = getVisibleExpenses(expenses, filters({ sortBy: "date_desc" }));
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
  });

  it("should sort by amount ascending", () => {
    const result = getVisibleExpenses(expenses, filters({ sortBy: "amount_asc" }));
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
  });

  it("should sort by amount descending", () => {
    const result = getVisibleExpenses(expenses, filters({ sortBy: "amount_desc" }));
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
  });
});
