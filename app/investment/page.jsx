"use client";
import React from "react";
import "./Investment.css";
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
const lastThreeMonths = month.slice(-7);
const lastThreeBalance = balance.slice(-7);

const sumBalance = "12 000";
const perBalance = 15;
const perAmount = 2356;
const data = {
  labels: lastThreeMonths,
  datasets: [
    {
      fill: true,
      tension: 0.5,
      backgroundColor: "rgba(90, 68, 183,0.5)",
      borderColor: "rgba(90, 68, 183,0.5)",
      data: lastThreeBalance,
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};

const Investment = () => {
  return (
    <div className="goals rounded shadow-lg pt-2 pb-1 px-1">
      <div className="row g-1 ">
        <div className="col-md-7">
          <p className="balances">Investments</p>
          <Line data={data} options={options} />
        </div>
        <div className="col-md-5 ">
          <h5 className="sum">₦{sumBalance}</h5>
          <h4 className="per justify-content-center align-items-center">
            <span className="px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="blue"
                class="bi bi-arrow-up-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
                />
              </svg>
            </span>
            {perBalance}%
          </h4>
          <h4 className="amount">+₦{perAmount}</h4>
        </div>
      </div>
    </div>
  );
};

export default Investment;
