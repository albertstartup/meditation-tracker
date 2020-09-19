import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";

const List = () => {
  const entries = useSelector((state: RootState) => state.entries)

  return (
    <ol>
      {entries.map((entry) => {
        return <h1>Amount: {entry.amount}</h1>;
      })}
    </ol>
  );
};

export default List