import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../actions";
import { getVisibleExpenses } from "../../selectors";

const ExpenseListItem = ({ amount, createdOn, description, id, note, ...props }) => {
  const handleRemoveExpense = () => {
    props.dispatch(removeExpense({ id }));
  };

  return (
    <div>
      <h3>{description}</h3>
      <p>Amount: {amount}</p>
      <p>Date: {new Date(createdOn).toDateString()}</p>
      {note && <p>Note: {note}</p>}
      <button onClick={handleRemoveExpense}>Remove</button>
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapPropsToState)(ExpenseListItem);
