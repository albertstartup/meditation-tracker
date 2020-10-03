import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/rootReducer";
import { selectors, actions } from "../features/entries/entriesSlice";

const entriesSelector = createSelector(
  (state: RootState) => state.entries,
  selectors.selectAll
);

const List = () => {
  const entries = useSelector(entriesSelector);

  const dispatch = useDispatch();

  return (
    <ol>
      {entries.map((entry) => {
        return (
          <>
            <h1>Amount: {entry.amount}</h1>
            <button
              onClick={() => {
                dispatch(actions.removeEntry(entry.id));
              }}
            >
              X
            </button>
          </>
        );
      })}
    </ol>
  );
};

export default List;
