/* eslint-disable no-undef */
import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

describe("get expenses selector", () => {
  it("returns 0 with and empty expense array", () => {
    const total = getExpensesTotal([]);
    expect(total).toEqual(0);
  });

  it("returns 0 with a null expense array", () => {
    const total = getExpensesTotal(null);
    expect(total).toEqual(0);
  });

  it("returns 0 with an undefined expense array", () => {
    const total = getExpensesTotal(undefined);
    expect(total).toEqual(0);
  });

  it("returns the correct total for a defined array", () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(1335);
  });
});
