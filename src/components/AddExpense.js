import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export const AddExpense = ({ history, onSubmit }) => {
  const submitExpense = (expense) => {
    onSubmit(expense);
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
  onSubmit: (expense) => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpense);
