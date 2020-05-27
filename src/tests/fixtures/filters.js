import moment from "moment";

export default [
  {
    endDate: undefined,
    sortBy: "amt_asc",
    startDate: undefined,
    text: "",
  },
  {
    endDate: moment(0).add(3, "days"),
    sortBy: "date_asc",
    startDate: moment(0),
    text: "g",
  },
];
