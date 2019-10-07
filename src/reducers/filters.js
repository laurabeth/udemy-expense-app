const defaultFilters = {
  endDate: undefined,
  sortBy: "date",
  startDate: undefined,
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
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: action.sortBy };
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
};

export default filtersReducer;
