import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface Entry {
  id: string
  amount: number,  
  createdAt: string
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

export const actions = entriesSlice.actions;

export const selectors = entryAdapter.getSelectors()

export default entriesSlice.reducer;
