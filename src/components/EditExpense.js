import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions";

const EditExpense = ({ dispatch, expense, history }) => {
  const submitEdit = (edits) => {
    dispatch(editExpense(expense.id, edits));
    history.push("/");
  };
  const handleRemoveExpense = () => {
    dispatch(removeExpense({ id: expense.id }));
    history.push("/");
  };
  return (
    <div>
      <ExpenseForm expense={expense} submitExpense={submitEdit} />
      <button onClick={handleRemoveExpense}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
  };
};

export default connect(mapStateToProps)(EditExpense);
