import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboard = () => {
  return (
    <div>
      <ExpenseList />
      <ExpenseListFilters />
    </div>
  );
};

export default ExpenseDashboard;
