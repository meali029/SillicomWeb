import React from "react";
import "../../Styling/goal.css";

function Goal() {
  return (
    <section className="goal-section">
      <div className="idea">
        <h1>
          From <span className="clr">Idea </span>to Completion, we bring
        </h1>
        <h1 className="clr">Tech Expertise </h1>
      </div>
      <div className="cards">
        <div className="box">
          <div className="no">
            <h1>01</h1>
          </div>
          <div className="skill">
            <h1>Web Development</h1>
          </div>
          <div className="description">
            <p>Leverage cutting-edge web development</p>
            <p>technologies to create innovative, responsive,</p>
            <p>and user-friendly solutions that keep you</p>
            <p>ahead in the digital landscape.</p>
          </div>
        </div>
        <div className="box">
          <div className="no">
            <h1>02.</h1>
          </div>
          <div className="skill">
            <h1>Cyber Security Solutions</h1>
          </div>
          <div className="description">
            <p>Empower your business with advanced</p>
            <p>cybersecurity solutions to protect data,</p>
            <p>mitigate risks, and stay resilient against</p>
            <p>emerging threats.</p>
          </div>
        </div>
        <div className="box">
          <div className="no">
            <h1>03</h1>
          </div>
          <div className="skill">
            <h1> Digital Marketing </h1>
          </div>
          <div className="description">
            <p>Transform your brand with data-driven <br />digital marketing</p>
            <p>strategies designed to increase visibility, engage audiences,</p>
            <p>and maximize your online impact.</p>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="box">
          <div className="no">
            <h1>04</h1>
          </div>
          <div className="skill">
            <h1>AI Solutions</h1>
          </div>
          <div className="description">
            <p>
              Enhance your business with AI solutions <br />that automate processes,
            </p>
            <p>
              deliver insights, and unlock new levels of efficiency and
              innovation.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="no">
            <h1>05.</h1>
          </div>
          <div className="skill">
            <h1>SEO</h1>
          </div>
          <div className="description">
            <p>Improve search engine rankings with targeted SEO strategies</p>
            <p>that drive organic traffic, boost visibility, and </p>
            <p>bring your audience to you.</p>
          </div>
        </div>
        <div className="box">
          <div className="no">
            <h1>06</h1>
          </div>
          <div className="skill">
            <h1>Social Media Managment</h1>
          </div>
          <div className="description">
            <p>
              Engage your audience effectively with professional social media
            </p>
            <p>management that builds brand <br /> loyalty, drives engagement,</p>
            <p>and strengthens your online presence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goal;
