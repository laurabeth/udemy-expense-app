import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expenses</h1>
    <NavLink activeClassName="is-active" exact to="/">
      Dashboard
    </NavLink>
    <span> | </span>
    <NavLink activeClassName="is-active" to="/create">
      Create Expense
    </NavLink>
    <span> | </span>
  </header>
);

export default Header;
