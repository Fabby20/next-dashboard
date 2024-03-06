import React from "react";
import "./Staistic.css";

const Staistic = () => {
  return (
    <div className="cost rounded shadow-lg invest">
      <table class="table">
        <thead>
          <tr>
            <th scope="col text-white">Goals</th>
            <th scope="col text-white fw-normal">
              New goal{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yacht</td>
            <td>₦ 70000</td>
          </tr>
          <tr>
            <td>Truck</td>
            <td>₦ 5000</td>
          </tr>
          <tr>
            <td>Trip to mexico</td>
            <td>₦ 50000</td>
          </tr>
          <tr>
            <td>Watch</td>
            <td>₦ 4000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Staistic;
