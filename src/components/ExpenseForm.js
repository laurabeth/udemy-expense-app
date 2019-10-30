import React from "react";
const { useState } = React;

const ExpenseForm = () => {
  const [description, setDescription] = useState({ value: "" });
  const [amount, setAmount] = useState({ value: 0 });
  const [note, setNote] = useState({ value: "" });

  const onDescriptionChange = (event) => {
    setDescription({ value: event.target.value });
  };

  const onAmountChange = (event) => {
    const input = event.target.value;
    if (input.match(/^\d*(\.\d{0,2})?$/)) {
      setAmount({ value: input });
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
