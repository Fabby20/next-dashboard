"use client";
import React from "react";
import "./Expenses.css";
import { Doughnut } from "react-chartjs-2";

const expense = ["Food", "Housing", "Health", "Travel", "Other"];
const cost = [50, 30, 34, 12, 15];

const sumBalance = "12 000";
const perBalance = 15;
const perAmount = 2356;
const data = {
  labels: expense,
  datasets: [
    {
      hoverOffset: 4,
      backgroundColor: [
        "rgb(138,224,233)",
        "#db88f1",
        "rgb(203,221,251)",
        "rgb(127,102,199)",
        "rgb(105,216,226)",
      ],
      data: cost,
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
};

const Expenses = () => {
  return (
    <div className=" rounded shadow-lg pt-2 pb-1 px-1">
      <div className="row g-1 ">
        <div className="col-md-12">
          <p className="balances">Expenses</p>
          <Doughnut data={data} style={{ width: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
