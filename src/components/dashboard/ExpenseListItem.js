import React from "react";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ amount, createdOn, description, id, note }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>Amount: {amount}</p>
      <p>Date: {DateTime.fromMillis(createdOn).toLocaleString()}</p>
      {note && <p>Note: {note}</p>}
    </div>
  );
};

export default ExpenseListItem;
