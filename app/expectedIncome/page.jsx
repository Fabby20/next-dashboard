"use client";
import React from "react";
import "./Expected.css";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const expectedIncome = [
  "Stock",
  "Rental",
  "Land",
  "House",
  "Bonds",
  "Options",
  "Livestock",
  "Gold",
  "Sliver",
  "metal",
];
const cost = [20000, 7000, 4000, 2046, 4000, 4030, 5030, 2220, 2030];

const data = {
  labels: expectedIncome,
  datasets: [
    {
      hoverOffset: 4,
      backgroundColor: [
        "rgb(138,224,233)",
        "#db88f1",
        "rgb(90, 68, 183)",
        "rgb(127,102,199)",
        "rgb(102,41,136)",
        "rgb(115,219,226)",
        "rgb(209,223,248)",
        "rgb(79,136,219)",
        "rgb(198,163,243)",
        "rgb(138,119,238)",
      ],
      data: cost,
    },
  ],
};
const ExpectedIncome = () => {
  return (
    <div className="card rounded shadow-lg pt-2 pb-1 px-1">
      <div className="row g-1 ">
        <div className="col-md-12">
          <p className="balances">Expected income</p>
          <Doughnut data={data} style={{ width: "30px", height: "10px" }} />
        </div>
      </div>
    </div>
  );
};

export default ExpectedIncome;
