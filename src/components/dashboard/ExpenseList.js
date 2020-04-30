import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import { getVisibleExpenses } from "../../selectors";

export const ExpenseList = (props) => {
  return (
    <>
      {props.expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <div>
          {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
