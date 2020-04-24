/* eslint-disable no-undef */
import {
  setStartDate,
  setEndDate,
  sortByAmountAscending,
  sortByAmountDescending,
  sortByDateAscending,
  sortByDateDescending,
} from "../../actions";
import moment from "moment";

describe("set date tests", () => {
  const testMoment = moment("12/31/1969");
  it("should generate set start date action object", () => {
    const action = setStartDate(testMoment);
    expect(action).toEqual({
      startDate: testMoment,
      type: "SET_START_DATE",
    });
  });
  it("should generate set end date action object", () => {
    const action = setEndDate(testMoment);
    expect(action).toEqual({
      endDate: testMoment,
      type: "SET_END_DATE",
    });
  });
});

describe("sort by amount tests", () => {
  it("should generate sort by amount ascending action object", () => {
    const action = sortByAmountAscending();
    expect(action).toEqual({ sortBy: "amount_asc", type: "SORT_BY_AMOUNT_ASC" });
  });
  it("should generate sort by amount descending action object", () => {
    const action = sortByAmountDescending();
    expect(action).toEqual({ sortBy: "amount_desc", type: "SORT_BY_AMOUNT_DESC" });
  });
});

describe("sort by date tests", () => {
  it("should generate sort by date ascending action object", () => {
    const action = sortByDateAscending();
    expect(action).toEqual({ sortBy: "date_asc", type: "SORT_BY_DATE_ASC" });
  });
  it("should generate sort by date descending action object", () => {
    const action = sortByDateDescending();
    expect(action).toEqual({ sortBy: "date_desc", type: "SORT_BY_DATE_DESC" });
  });
});
