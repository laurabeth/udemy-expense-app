import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpenseAsync } from "../actions/expenses";

export const AddExpense = ({ history, addExpenseAsync }) => {
  const submitExpense = (expense) => {
    addExpenseAsync(expense);
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
  addExpenseAsync: (expense) => dispatch(addExpenseAsync(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpense);
