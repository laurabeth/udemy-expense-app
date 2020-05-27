import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions";

export const EditExpense = ({ editExpense, expense, history, removeExpense }) => {
  const submitEdit = (edits) => {
    editExpense(expense.id, edits);
    history.push("/");
  };
  const handleRemoveExpense = () => {
    removeExpense(expense.id);
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

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, edits) => dispatch(editExpense(id, edits)),
  removeExpense: (id) => dispatch(removeExpense({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
