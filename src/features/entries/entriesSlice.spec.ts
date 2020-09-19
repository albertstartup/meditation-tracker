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
    expect(entries(undefined, { type: undefined })).toEqual([]);
  });

  it("should handle addEntry", () => {
    expect(entries([], addEntry(5))).toEqual([
      { id: expect.any(String), amount: 5, createdAt: date },
    ]);

    expect(
      entries(
        [
          {
            id: "1",
            amount: 10,
            createdAt: date,
          },
        ],
        addEntry(15)
      )
    ).toEqual([
      {
        id: "1",
        amount: 10,
        createdAt: date,
      },
      {
        id: expect.any(String),
        amount: 15,
        createdAt: date,
      },
    ]);
  });
});
