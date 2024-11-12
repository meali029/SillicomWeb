import React from 'react'
import './leftside.css'
function LeftSide() {
  return (
    <div>
      <div className="text">
          <p className="colr">
            Pricing
          </p>
          <h1>We Leverage the <span className="colr">latest</span>
          <br /> <span className="colr">advancements in AI </span> to deliver
          <br /> the highest quality techology,
          <br /><span className="colr">on time and on budget</span>
          </h1>
          <p className='para'>
            We've been helping customers since 2009 and yake pride in delivering
            <br />high quality custom designed to help you build grow and 
            <br /> revolutionize your business
          </p>
          <button className="review">See our Reviews</button>
        </div>
        <div className="clients">
          <div className="orders">
            <h1>236+</h1>
            <p>Active Clients</p>
          </div>
          <div className="orders">
          <h1>3000+</h1>
          <p>Project Delivered</p>
          </div>
          <div className="orders">
          <h1>23+</h1>
          <p>Countries Support</p>
          </div>
        </div>
    </div>
  )
}

export default LeftSide
