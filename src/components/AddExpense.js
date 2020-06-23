import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export const AddExpense = ({ history, startAddExpense }) => {
  const submitExpense = (expense) => {
    startAddExpense(expense);
    history.push("/");
  };

  return (
    <>
      <h1>AddExpense</h1>
      <ExpenseForm submitExpense={submitExpense} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpense);
