import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function AnalysisChart() {
  const data = [12, 19, 3, 5, 2, 3, 10, 8, 6, 15, 20, 30];
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const chartData = labels.map((label, index) => ({
    name: label,
    value: data[index],
  }));

  return (
    <div style={{ width: "100%", height: "250px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#37901759"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9E9E9E", fontFamily: "Inter" }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#9E9E9E", fontFamily: "Inter" }}
          />

          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="value"
            fill="#6FB258"
            barSize={30}
            radius={[12, 12, 0, 0]}
            // isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
