import "normalize.css";
import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import useStore from "./store";
import * as actions from "./actions";
import { DateTime } from "luxon";

const store = useStore();
const { addExpense } = actions;
const now = Date.now();

store.dispatch(
  addExpense({
    amount: 3500,
    createdOn: DateTime.fromMillis(now)
      .minus({ days: 13 })
      .toMillis(),
    description: "Water Bill",
    note: "sewage included",
  }),
);
store.dispatch(
  addExpense({
    amount: 6000,
    createdOn: DateTime.fromMillis(now)
      .minus({ days: 2 })
      .toMillis(),
    description: "Gas Bill",
    note: "wtf we have gas?",
  }),
);
store.dispatch(
  addExpense({
    amount: 169500,
    createdOn: DateTime.fromMillis(now)
      .plus({ days: 23 })
      .toMillis(),
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
