import moment from "moment";

const defaultFilters = {
  endDate: moment().endOf("month"),
  sortBy: "date_asc",
  startDate: moment().startOf("month"),
  text: "",
};

const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT_ASC":
    case "SORT_BY_AMOUNT_DESC":
    case "SORT_BY_DATE_ASC":
    case "SORT_BY_DATE_DESC":
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
};

export default filtersReducer;
