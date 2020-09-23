import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface Entry {
  id: string
  amount: number,  
  createdAt: Date
}

const entryAdapter = createEntityAdapter<Entry>()

const entriesSlice = createSlice({
  name: "entries",
  initialState: entryAdapter.getInitialState(),
  reducers: {
    addEntry: entryAdapter.addOne,
    removeEntry: entryAdapter.removeOne
  },
});

export const { addEntry, removeEntry } = entriesSlice.actions;

export const { selectAll } = entryAdapter.getSelectors()

export default entriesSlice.reducer;
