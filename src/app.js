import "normalize.css";
import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";

// eslint-disable-next-line no-undef
ReactDOM.render(<AppRouter />, document.getElementById("app"));
