import moment from "moment";

const expenses = [
  {
    amount: 50,
    createdOn: moment(0).toString(),
    description: "gum",
    id: "1",
    note: "",
  },
  {
    amount: 485,
    createdOn: moment(0)
      .subtract(1, "day")
      .toString(),
    description: "green rock candy",
    id: "2",
    note: "",
  },
  {
    amount: 800,
    createdOn: moment(0)
      .add(1, "day")
      .toString(),
    description: "chocolate",
    id: "3",
    note: "",
  },
];

export default expenses;
