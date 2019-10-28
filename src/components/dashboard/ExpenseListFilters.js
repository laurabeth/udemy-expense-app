import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../../actions";

const ExpenseListFilters = (props) => {
  const handleChangeFilter = (e) => {
    props.dispatch(setTextFilter(e.target.value));
  };

  return (
    <div>
      <input onChange={handleChangeFilter} type="text" value={props.filters.text} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
