/* eslint-disable no-undef */
import moment from "moment";
import { filtersReducer } from "../../reducers";

const defaultState = {
  endDate: moment().endOf("month"),
  sortBy: "date_asc",
  startDate: moment().startOf("month"),
  text: "",
};

describe("filters reducer", () => {
  it("should set up default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual(defaultState);
  });

  it.each([
    ["amount_asc", "SORT_BY_AMOUNT_ASC"],
    ["amount_desc", "SORT_BY_AMOUNT_DESC"],
    ["date_asc", "SORT_BY_DATE_ASC"],
    ["date_desc", "SORT_BY_DATE_DESC"],
  ])("should sort by %s", (sort, type) => {
    const state = filtersReducer(undefined, { sortBy: sort, type: type });
    expect(state.sortBy).toEqual(sort);
  });

  it("should set text filter", () => {
    const state = filtersReducer(undefined, { text: "content", type: "SET_TEXT_FILTER" });
    expect(state.text).toEqual("content");
  });

  it("should set end date filter", () => {
    const date = moment()
      .endOf("month")
      .add(2, "day");
    const state = filtersReducer(undefined, {
      endDate: date,
      type: "SET_END_DATE",
    });
    expect(state.endDate).toEqual(date);
  });

  it("should set start date filter", () => {
    const date = moment()
      .endOf("month")
      .subtract(2, "day");
    const state = filtersReducer(undefined, {
      startDate: date,
      type: "SET_START_DATE",
    });
    expect(state.startDate).toEqual(date);
  });
});
