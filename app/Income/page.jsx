import React from "react";
import "./Income.css";

const Income = () => {
  return (
    <div className="income rounded shadow-sm">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Recent Expenses</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="align-items-center justify-content-center">
              Utility bill
            </td>
            <td>may 08 2023</td>
            <td>₦ 2000</td>
          </tr>
          <tr className="">
            <td>Cafe mom</td>
            <td>june 01 2023</td>
            <td>₦ 2300</td>
          </tr>
          <tr className="">
            <td>phone bill</td>
            <td>dec 09 2023</td>
            <td>₦ 2000</td>
          </tr>
          <tr className="">
            <td>subscription</td>
            <td>jan 09 2033</td>
            <td>₦ 1230</td>
          </tr>
          <tr className="">
            <td>cloth</td>
            <td>july 03 2023</td>
            <td>₦ 5500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Income;
