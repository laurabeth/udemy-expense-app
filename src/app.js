import "normalize.css";
import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import useStore from "./store";
import * as actions from "./actions";
import moment from "moment";

const store = useStore();
const { addExpense } = actions;

store.dispatch(
  addExpense({
    amount: 3500,
    createdOn: moment().subtract(13, "days"),
    description: "Water Bill",
    note: "sewage included",
  }),
);
store.dispatch(
  addExpense({
    amount: 6000,
    createdOn: moment().subtract(2, "days"),
    description: "Gas Bill",
    note: "wtf we have gas?",
  }),
);
store.dispatch(
  addExpense({
    amount: 169500,
    createdOn: moment().add(23, "days"),
    description: "Mortgage Payment",
    note: "omg house!",
  }),
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(jsx, document.getElementById("app"));
