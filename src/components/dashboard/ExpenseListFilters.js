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

export const ExpenseListFilters = ({
  filters,
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmountAscending,
  sortByAmountDescending,
  sortByDateAscending,
  sortByDateDescending,
}) => {
  const [calendarFocused, setCalendarFocused] = useState(null);
  const handleChangeFilter = (e) => {
    setTextFilter(e.target.value);
  };

  const handleSelectSort = (e) => {
    switch (e.target.value) {
      case "date_asc":
        sortByDateAscending();
        break;
      case "date_desc":
        sortByDateDescending();
        break;
      case "amount_asc":
        sortByAmountAscending();
        break;
      case "amount_desc":
        sortByAmountDescending();
        break;
    }
  };

  const handleChangeFilterDates = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
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
        endDateId="endDate"
        focusedInput={calendarFocused}
        isOutsideRange={() => false}
        numberOfMonths={1}
        onDatesChange={handleChangeFilterDates}
        onFocusChange={(focused) => setCalendarFocused(focused)}
        showClearDates
        startDate={filters.startDate}
        startDateId="startDate"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmountAscending: () => dispatch(sortByAmountAscending()),
  sortByAmountDescending: () => dispatch(sortByAmountDescending()),
  sortByDateAscending: () => dispatch(sortByDateAscending()),
  sortByDateDescending: () => dispatch(sortByDateDescending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
