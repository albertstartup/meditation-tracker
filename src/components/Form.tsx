import React, { useState } from "react";
import { addEntry } from "../features/entries/entriesSlice";
import { Entry } from "../types";
import { useDispatch } from "react-redux";

const Form: React.FC = () => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const now = new Date();
  const [time, setTime] = useState(now.getHours() + ":" + now.getMinutes())

  return (
    <form>
      <label>Amount</label>
      <br />

      <input
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
        type="number"
        placeholder="Amount"
      />
      <br />

      <label>Time</label>
      <br />

      <input value={time} type="time" />
      <br />

      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addEntry(amount));
        }}
      >
        Add
      </button>
    </form>
  );
};

export default Form;
