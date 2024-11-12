import React from "react";
import "./pricing.css";
import RightSide from "./rightside";  
import LeftSide from "./LeftSide";
import "./leftside.css";
function Pricing() {
  return (
    <section className="pricing-section">
      <div className="left">
        <LeftSide />
      </div>
      <div className="right">
        <RightSide />
      </div>
    </section>
  );
}

export default Pricing;
