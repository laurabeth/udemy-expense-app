/* eslint-disable jsx-a11y/no-onchange */
import React from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmountAscending,
  sortByDateAscending,
  sortByDateDescending,
  sortByAmountDescending,
} from "../../actions";

const { useState } = React;

const ExpenseListFilters = ({ dispatch, filters }) => {
  const [calendarFocused, setCalendarFocused] = useState("false");
  const handleChangeFilter = (e) => {
    dispatch(setTextFilter(e.target.value));
  };

  const handleSelectSort = (e) => {
    switch (e.target.value) {
      case "date_asc":
        dispatch(sortByDateAscending());
        break;
      case "date_desc":
        dispatch(sortByDateDescending());
        break;
      case "amount_asc":
        dispatch(sortByAmountAscending());
        break;
      case "amount_desc":
        dispatch(sortByAmountDescending());
        break;
    }
  };

  const handleChangeFilterDates = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  return (
    <div>
      <input onChange={handleChangeFilter} type="text" value={filters.text} />
      <select onChange={handleSelectSort} value={filters.sortBy}>
        <option value="amount_asc">Amount (Ascending)</option>
        <option value="amount_desc">Amount (Descending)</option>
        <option value="date_asc">Date (Ascending)</option>
        <option value="date_desc">Date (Descending)</option>
      </select>
      <DateRangePicker
        endDate={filters.endDate}
        endDateId={filters.endDate.toString()}
        focusedInput={calendarFocused}
        isOutsideRange={() => false}
        numberOfMonths={1}
        onDatesChange={handleChangeFilterDates}
        onFocusChange={(focused) => setCalendarFocused(focused)}
        showClearDates
        startDate={filters.startDate}
        startDateId={filters.startDate.toString()}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
