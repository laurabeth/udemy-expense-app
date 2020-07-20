import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpenseAsync, removeExpenseAsync } from "../actions";

export const EditExpense = ({
  editExpenseAsync,
  expense,
  history,
  removeExpenseAsync,
}) => {
  const submitEdit = (edits) => {
    editExpenseAsync(expense.id, edits);
    history.push("/");
  };
  const handleRemoveExpense = () => {
    removeExpenseAsync(expense.id);
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
  editExpenseAsync: (id, edits) => dispatch(editExpenseAsync(id, edits)),
  removeExpenseAsync: (id) => dispatch(removeExpenseAsync({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
