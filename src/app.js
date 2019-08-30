import "normalize.css";
import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const ExpenseDashboardPage = () => <div> This is the dashboard component </div>;
const AddExpensePage = () => <div> This is the add expense component </div>;
const EditExpensePage = () => <div> This is the edit component </div>;
const HelpPage = () => <div> This is the help component </div>;
const NotFoundPage = () => <div> 404 </div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route component={ExpenseDashboardPage} exact path="/" />
      <Route component={AddExpensePage} path="/create" />
      <Route component={EditExpensePage} path="/edit" />
      <Route component={HelpPage} path="/help" />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
