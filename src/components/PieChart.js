"use client";
import * as React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
  id: "centerText",
  afterDatasetsDraw(chart, args, options) {
    const { ctx } = chart;
    const { width, height } = chart;

    ctx.save();

    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.font = "12px Inter";

    // Draw the first line of text
    ctx.fillText("January", width / 2, height / 2 - 1);

    // Draw the second line of text
    ctx.fillStyle = "#379017";
    ctx.font = "10px Inter";
    ctx.fontWeight = "500";
    ctx.fillText(" 80%", width / 2, height / 2 + 15);

    ctx.restore();
  },
};
export default function PieChart() {
  const data = {
    labels: ["Category A", "Category B"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#FF0000", "#379017"],
        hoverBackgroundColor: ["#FF0000", "#379017"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div style={{ height: "100px", width: "100px" }}>
      {" "}
      <Pie data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
}
