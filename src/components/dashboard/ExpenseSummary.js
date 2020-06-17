import numeral from "numeral";
import React from "react";
import { connect } from "react-redux";
import getExpensesTotal from "../../selectors/expenses-total";
import { getVisibleExpenses } from "../../selectors";

export const ExpenseSummary = ({ numberOf, total }) => (
  <div>{`Viewing ${numberOf} expenses, totaling ${numeral(total / 100).format(
    "$0,0.00",
  )}`}</div>
);

const mapStateToProps = (state) => {
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    numberOf: expenses.length,
    total: getExpensesTotal(expenses),
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
