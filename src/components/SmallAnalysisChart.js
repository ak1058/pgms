import * as React from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

export default function AnalysisChart() {
    const data = [12, 19, 3, 5, 2];
    const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
    ];
    const chartData = labels.map((label, index) => ({
        name: label,
        value: data[index],
    }));

    return (
        <div style={{ width: "100%", height: "250px" }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#379037"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#379037", fontFamily: "Inter" }}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12, fill: "#379037", fontFamily: "Inter" }}
                    />

                    <Tooltip cursor={{ fill: "transparent" }} />
                    <Line
                        dataKey="value"
                        stroke="#379037" // Set the line color to green
                        strokeWidth={2} // Optional: adjust the thickness of the line
                        fill="rgba(0, 255, 0, 0.2)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
