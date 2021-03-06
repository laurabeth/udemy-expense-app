import moment from "moment";

const getVisibleExpenses = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;

  return expenses
    .filter((expense) => {
      const createdOnMoment = moment(expense.createdOn);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdOnMoment, "day")
        : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdOnMoment, "day") : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "amount_asc":
          return a.amount > b.amount ? 1 : -1;
        case "amount_desc":
          return a.amount < b.amount ? 1 : -1;
        case "date_asc":
          return a.createdOn > b.createdOn ? 1 : -1;
        case "date_desc":
          return a.createdOn < b.createdOn ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
