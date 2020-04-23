import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const { useState } = React;

const ExpenseForm = ({ expense, submitExpense }) => {
  const [amount, setAmount] = useState(expense ? (expense.amount / 100).toString() : "");
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [createdOn, setCreatedOn] = useState(
    expense ? moment(expense.createdOn) : moment(),
  );
  const [description, setDescription] = useState(expense ? expense.description : "");
  const [error, setError] = useState("");
  const [note, setNote] = useState(expense ? expense.note : "");

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onAmountChange = (event) => {
    const input = event.target.value;
    if (input.length === 0 || input.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(input);
    }
  };

  const onDateChange = (date) => {
    if (date) {
      setCreatedOn(date);
    }
  };

  const onNoteChange = (event) => {
    setNote(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      setError("Please provide description and amount");
    } else {
      setError("");
      submitExpense({
        amount: parseFloat(amount, 10) * 100,
        createdOn: createdOn.valueOf(),
        description,
        note,
      });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <input
          onChange={onDescriptionChange}
          placeholder="Description"
          type="text"
          value={description}
        />
        <input
          onChange={onAmountChange}
          placeholder="Amount"
          type="string"
          value={amount}
        />
        <SingleDatePicker
          date={createdOn}
          focused={calendarFocused}
          isOutsideRange={() => false}
          numberOfMonths={1}
          onDateChange={onDateChange}
          onFocusChange={({ focused }) => setCalendarFocused(focused)}
        />
        <textarea
          onChange={onNoteChange}
          placeholder="Add a note for your expense (optional)"
          value={note}
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
