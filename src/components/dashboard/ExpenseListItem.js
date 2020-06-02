import numeral from "numeral";
import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ amount, createdOn, description, id, note }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>Amount: {numeral(amount).format("$0,0.00")}</p>
      <p>Date: {createdOn.format("ddd, MMM Do, YYYY")}</p>
      {note && <p>Note: {note}</p>}
    </div>
  );
};

export default ExpenseListItem;
