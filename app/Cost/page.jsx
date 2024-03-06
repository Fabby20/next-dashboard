import React from "react";
import "./Cost.css";

const Cost = () => {
  return (
    <div className="cost rounded shadow-lg invest">
      <table class="table">
        <thead>
          <tr className="fw-bold">
            <th scope="col invest textwhite">Investment</th>
            <th scope="col">Month</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>Stock</td>
            <td>₦ 20000</td>
          </tr>
          <tr>
            <td>Rental</td>
            <td>₦ 7000</td>
          </tr>
          <tr>
            <td>Land</td>
            <td>₦ 4000</td>
          </tr>
          <tr>
            <td>House</td>
            <td>₦ 2046</td>
          </tr>
          <tr>
            <td>Bonds</td>
            <td>₦ 4000</td>
          </tr>
          <tr>
            <td>Options</td>
            <td>₦ 4000</td>
          </tr>
          <tr>
            <td>Livestock</td>
            <td>₦ 4030</td>
          </tr>
          <tr>
            <td>gold</td>
            <td>₦ 5030</td>
          </tr>
          <tr>
            <td>Sliver</td>
            <td>2220</td>
          </tr>
          <tr>
            <td>metal</td>
            <td>₦ 2030</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cost;
