/* eslint-disable no-undef */
import getExpensesTotal from "../../selectors";
describe("get expenses selector", () => {
  it("returns 0 with no expenses", () => {
    const total = getExpensesTotal([]);
    expect(total).toEqual(0);
  });
});
