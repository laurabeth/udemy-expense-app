import React from "react";
import { connect } from "react-redux";
import { authenticateAsync } from "../actions/auth";

const Login = ({ authenticateAsync }) => {
  return (
    <div>
      <button onClick={authenticateAsync}>Log in</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  authenticateAsync: () => dispatch(authenticateAsync()),
});

export default connect(undefined, mapDispatchToProps)(Login);
