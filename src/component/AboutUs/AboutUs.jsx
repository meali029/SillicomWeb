import React from 'react'
import '../../Styling/aboutus.css';
import Left from '../AboutUs/Left';
import Right from '../AboutUs/Right'
function AboutUs() {
  return (
    <section className="about-section">
      <div className="left">
      <Left/>
      </div>
      <div className="right">
      <Right/>
      </div>
    </section>
  )
}

export default AboutUs
