import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { deauthenticateAsync } from "../actions/auth";

export const Header = ({ deauthenticateAsync }) => (
  <header>
    <h1>Expenses</h1>
    <NavLink activeClassName="is-active" exact to="/">
      Dashboard
    </NavLink>
    <span> | </span>
    <NavLink activeClassName="is-active" to="/create">
      Create Expense
    </NavLink>
    <button onClick={deauthenticateAsync}>Log out</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  deauthenticateAsync: () => dispatch(deauthenticateAsync()),
});

export default connect(undefined, mapDispatchToProps)(Header);
