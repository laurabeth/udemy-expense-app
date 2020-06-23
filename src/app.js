import "normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import useStore from "./store";
import "./firebase/firebase";

const store = useStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(jsx, document.getElementById("app"));
