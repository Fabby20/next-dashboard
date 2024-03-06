import React from "react";
import Goals from "../Goals/page";
import Investment from "../investment/page";
import Cost from "../Cost/page";
import Income from "../Income/page";
import Expenses from "../expenses/page";

import Staistic from "../staistics/page";
import "./Content.css";
import ContentTop from "../ContentTop/page";
import Saving from "../saving/page";
import ExpectedIncome from "../expectedIncome/page";
import TotalBalance from "../totalBalance/TotalBalance";
export const Content = () => {
  return (
    <div className=" background shadow-lg">
      <ContentTop />
      <div className="grid-container my-1">
        {/* First Row with 3 Columns */}
        <div className="grid-item grid-item-1  column-bgrounded">
          <Investment />
        </div>
        <div className="grid-item grid-item-2 rounded">
          <TotalBalance />
        </div>

        <div className="grid-item grid-item-3 rounded">
          <Saving />
        </div>
        <div className="grid-item grid-item-4   column-bg rounded">
          <Cost />
        </div>

        {/* Second Row with 2 Columns */}
        <div className="grid-item grid-item-5  column-bgrounded">
          <Income />
        </div>
        <div className="grid-item grid-item-6  column-bgrounded">
          <Expenses />
        </div>

        {/* Second Row with 2 Columns */}
        <div className="grid-item grid-item-7 rounded">
          <Goals />
        </div>
        <div className="grid-item grid-item-8 column-bg rounded">
          <Staistic />
        </div>

        <div className="grid-item grid-item-8 column-bg rounded">
          <ExpectedIncome />
        </div>
      </div>
    </div>
  );
};
