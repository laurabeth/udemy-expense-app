/* eslint-disable jsx-a11y/no-onchange */
import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmountAscending,
  sortByDateAscending,
  sortByDateDescending,
  sortByAmountDescending,
} from "../../actions";

const ExpenseListFilters = (props) => {
  const handleChangeFilter = (e) => {
    props.dispatch(setTextFilter(e.target.value));
  };

  const handleSelectSort = (e) => {
    switch (e.target.value) {
      case "date_asc":
        props.dispatch(sortByDateAscending());
        break;
      case "date_desc":
        props.dispatch(sortByDateDescending());
        break;
      case "amount_asc":
        props.dispatch(sortByAmountAscending());
        break;
      case "amount_desc":
        props.dispatch(sortByAmountDescending());
        break;
    }
  };

  return (
    <div>
      <input onChange={handleChangeFilter} type="text" value={props.filters.text} />
      <select onChange={handleSelectSort} value={props.filters.sortBy}>
        <option value="amount_asc">Amount (Ascending)</option>
        <option value="amount_desc">Amount (Descending)</option>
        <option value="date_asc">Date (Ascending)</option>
        <option value="date_desc">Date (Descending)</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
