import React from "react";
import { useSelector } from "react-redux";
import { Line, LineChart } from "recharts";
import { selectors as entriesSelector } from "../features/entries/entriesSlice";

const Chart = () => {
  const entries = useSelector(entriesSelector.selectAll);

  return (
    <LineChart width={400} height={400} data={entries}>
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    </LineChart>
  );
};

export default Chart;
