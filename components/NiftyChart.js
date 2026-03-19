"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function NiftyChart({ data }) {
  const chartData = {
    labels: data.timestamps.map((t) =>
      new Date(t * 1000).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "NIFTY",
        data: data.prices,
        borderColor: "cyan",
      },
    ],
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <Line data={chartData} />
    </div>
  );
}