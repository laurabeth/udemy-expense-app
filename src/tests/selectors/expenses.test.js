/* eslint-disable no-undef */
import { getVisibleExpenses } from "../../selectors";
import moment from "moment";

const expensesMock = [
  {
    amount: 50,
    createdOn: moment(0).valueOf(),
    description: "gum",
    id: "1",
    note: "",
  },
  {
    amount: 485,
    createdOn: moment(0)
      .subtract(1, "day")
      .valueOf(),
    description: "green rock candy",
    id: "2",
    note: "",
  },
  {
    amount: 800,
    createdOn: moment(0)
      .add(1, "day")
      .valueOf(),
    description: "chocolate",
    id: "3",
    note: "",
  },
];

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
    const result = getVisibleExpenses(expensesMock, filters({ text: "g" }));
    expect(result).toEqual([expensesMock[1], expensesMock[0]]);
  });

  it("should filter by start date", () => {
    const result = getVisibleExpenses(
      expensesMock,
      filters({ startDate: moment(0).add(1, "day") }),
    );
    expect(result).toEqual([expensesMock[2]]);
  });

  it("should filter by endDate", () => {
    const result = getVisibleExpenses(
      expensesMock,
      filters({ endDate: moment(0).subtract(1, "day") }),
    );
    expect(result).toEqual([expensesMock[1]]);
  });

  it("should sort by date ascending", () => {
    const result = getVisibleExpenses(expensesMock, filters({ sortBy: "date_asc" }));
    expect(result).toEqual([expensesMock[1], expensesMock[0], expensesMock[2]]);
  });

  it("should sort by date descending", () => {
    const result = getVisibleExpenses(expensesMock, filters({ sortBy: "date_desc" }));
    expect(result).toEqual([expensesMock[2], expensesMock[0], expensesMock[1]]);
  });

  it("should sort by amount ascending", () => {
    const result = getVisibleExpenses(expensesMock, filters({ sortBy: "amount_asc" }));
    expect(result).toEqual([expensesMock[0], expensesMock[1], expensesMock[2]]);
  });

  it("should sort by amount descending", () => {
    const result = getVisibleExpenses(expensesMock, filters({ sortBy: "amount_desc" }));
    expect(result).toEqual([expensesMock[2], expensesMock[1], expensesMock[0]]);
  });
});
