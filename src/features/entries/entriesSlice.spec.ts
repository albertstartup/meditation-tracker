import entries, { addEntry } from "./entriesSlice";
import tk from "timekeeper";

let date: Date;
beforeEach(() => {
  date = new Date();
  tk.freeze(date);
});

afterEach(() => {
  tk.reset();
});

describe("entries reducer", () => {
  it("should handle initial state", () => {
    expect(entries(undefined, { type: undefined })).toEqual({entities: {}, ids: []});
  });
});
