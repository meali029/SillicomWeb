import React from "react";
import "../AboutUs/right.css";

const Right = () => {
  return (
    <div className="right-container">
      <h2 className="section-title">About Us</h2>
      <h1 className="intro-title">
        Introduction About Our <br /><span className="highlight">Digital Agency</span>{" "}
        Sector
      </h1>
      <div className="divider">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="line"></span>
      </div>
      <p className="description">
        Welcome to Sillcom Technologies, where we merge creativity and
        data-driven <br /> insights to elevate brands in the digital realm. <br /> Our mission
        is to empower businesses with innovative strategies that drive growth
        and meaningful connections <br /> with their audiences.
      </p>
      <div className="experience-section">
        <div className="experience-box">
          <h2>2+</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <ul className="services-list">
          <li>Web development</li>
          <li>Android development</li>
          <li>Digital marketing</li>
          <li>Social media management</li>
          <li>Cyber security solutions</li>
          <li>Artificial Intelligence (AI) solutions</li>
          <li>UI/UX & graphic designing</li>
        </ul>
      </div>
      <button className="about-button">More About Us</button>
    </div>
  );
};

export default Right;
