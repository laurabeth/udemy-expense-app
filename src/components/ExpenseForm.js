import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const { useState } = React;

const ExpenseForm = () => {
  const [description, setDescription] = useState({ value: "" });
  const [amount, setAmount] = useState({ value: 0 });
  const [note, setNote] = useState({ value: "" });
  const [createdOn, setCreatedOn] = useState(moment());
  const [calendarFocused, setCalendarFocused] = useState(false);

  const onDescriptionChange = (event) => {
    setDescription({ value: event.target.value });
  };

  const onAmountChange = (event) => {
    const input = event.target.value;
    if (!amount || input.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount({ value: input });
    }
  };

  const onDateChange = (date) => {
    if (date) {
      setCreatedOn(date);
    }
  };

  const onNoteChange = (event) => {
    setNote({ value: event.target.value });
  };

  return (
    <div>
      <form>
        <input
          onChange={onDescriptionChange}
          placeholder="Description"
          type="text"
          value={description.value}
        />
        <input
          onChange={onAmountChange}
          placeholder="Amount"
          type="string"
          value={amount.value}
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
          value={note.value}
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
