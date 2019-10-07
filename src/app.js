import "normalize.css";
import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";
import useStore from "./store";
import * as actions from "./actions";
import { getVisibleExpenses } from "./selectors";

const store = useStore();
const { addExpense, setTextFilter } = actions;

store.dispatch(addExpense({ amount: 3500, createdOn: Date.now(), description: "Water", note: "sewage included" }));
store.dispatch(addExpense({ amount: 6000, createdOn: Date.now(), description: "Gas Bill", note: "wtf we have gas?" }));
store.dispatch(setTextFilter("Bill"));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

// eslint-disable-next-line no-undef
ReactDOM.render(<AppRouter />, document.getElementById("app"));
