export const setTextFilter = (text = "") => {
  return {
    text,
    type: "SET_TEXT_FILTER",
  };
};

export const sortByDateAscending = () => {
  return {
    sortBy: "date_asc",
    type: "SORT_BY_DATE_ASC",
  };
};

export const sortByDateDescending = () => {
  return {
    sortBy: "date_desc",
    type: "SORT_BY_DATE_DESC",
  };
};

export const sortByAmountAscending = () => {
  return {
    sortBy: "amount_asc",
    type: "SORT_BY_AMOUNT_ASC",
  };
};

export const sortByAmountDescending = () => {
  return {
    sortBy: "amount_desc",
    type: "SORT_BY_AMOUNT_DESC",
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
