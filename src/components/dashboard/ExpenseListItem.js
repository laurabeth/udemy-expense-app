import numeral from "numeral";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({ amount, createdOn, description, id, note }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>Amount: {numeral(amount / 100).format("$0,0.00")}</p>
      <p>Date: {moment(createdOn).format("ddd, MMM Do, YYYY")}</p>
      {note && <p>Note: {note}</p>}
    </div>
  );
};

export default ExpenseListItem;
