import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import nanoid from "nanoid";
import { Entry } from "../../types";

const entriesSlice = createSlice({
  name: "entries",
  initialState: [] as Entry[],
  reducers: {
    addEntry: {
      reducer: (state, action: PayloadAction<Entry>) => {
        state.push(action.payload)
      },
      prepare: (amount: number) => {
        const id = nanoid()
        return { payload: { amount, id , createdAt: new Date()}}
      }
    },
  },
});

export const { addEntry } = entriesSlice.actions;

export default entriesSlice.reducer;
