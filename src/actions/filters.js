export const setTextFilter = (text = "") => {
  return {
    text,
    type: "SET_TEXT_FILTER",
  };
};

export const sortByDate = () => {
  return {
    sortBy: "date",
    type: "SORT_BY_DATE",
  };
};

export const sortByAmount = () => {
  return {
    sortBy: "amount",
    type: "SORT_BY_AMOUNT",
  };
};

export const setStartDate = (startDate) => {
  return {
    startDate,
    type: "SET_START_DATE",
  };
};

export const setEndDate = (endDate) => {
  return {
    endDate,
    type: "SET_END_DATE",
  };
};
