import React from "react";

const ExpenseListItem = ({ amount, createdOn, description, note }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>Amount: {amount}</p>
      <p>Date: {new Date(createdOn).toDateString()}</p>
      {note && <p>Note: {note}</p>}
    </div>
  );
};

export default ExpenseListItem;
