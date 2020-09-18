import React from "react";
import AddExpense from "../components/AddExpense";
import ExpenseDashboard from "../components/dashboard/ExpenseDashboard";
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Header from "../components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route component={Login} exact path="/" />
          <Route component={ExpenseDashboard} path="/dashboard" />
          <Route component={AddExpense} path="/create" />
          <Route component={EditExpense} path="/edit/:id" />
          <Route component={Help} path="/help" />
          <Route component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
