import React from "react";
import "./Goals.css";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const month = [
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
const balance = [50, 30, 34, 12, 15, 18, 15, 19, 22, 35, 39, 56];
const savings = [40, 10, 30, 6, 15, 11, 4, 17, 22, 30, 33, 56];
const investment = [51, 32, 14, 18, 18, 18, 16, 12, 22, 35, 40, 52];

const data = {
  labels: month,
  datasets: [
    {
      fill: true,
      tension: 0.5,
      backgroundColor: "rgb(58,144,178,0.5)",
      borderColor: "rgba(90, 68, 183,0.5)",
      data: savings,
    },
    {
      fill: true,
      tension: 0.5,
      backgroundColor: "rgba(90, 68, 183,0.5)",
      borderColor: "rgba(30, 687, 223,0.5)",
      data: investment,
    },
    {
      fill: true,
      tension: 0.5,
      backgroundColor: "rgba(90, 68, 183,0.5)",
      borderColor: "rgba(90, 68, 183,0.5)",
      data: balance,
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { display: true },
    y: { display: true },
  },
};
const Staistic = () => {
  return (
    <div className="expense rounded shadow-lg pt-2 pb-1 px-1">
      <p className="balances">Staistics</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default Staistic;
