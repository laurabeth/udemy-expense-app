import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpense = (props) => {
  const submitExpense = (expense) => {
    props.dispatch(addExpense(expense));
    props.history.push("/");
  };

  return (
    <>
      <h1>AddExpense</h1>
      <ExpenseForm submitExpense={submitExpense} />
    </>
  );
};

export default connect()(AddExpense);
