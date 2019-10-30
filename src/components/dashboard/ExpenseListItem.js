import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../actions";
import { DateTime } from "luxon";

const ExpenseListItem = ({ amount, createdOn, description, id, note, ...props }) => {
  const handleRemoveExpense = () => {
    props.dispatch(removeExpense({ id }));
  };

  return (
    <div>
      <h3>{description}</h3>
      <p>Amount: {amount}</p>
      <p>Date: {DateTime.fromMillis(createdOn).toLocaleString()}</p>
      {note && <p>Note: {note}</p>}
      <button onClick={handleRemoveExpense}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItem);
