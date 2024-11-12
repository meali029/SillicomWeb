import React from 'react';
import './rightside.css';

function RightSide() {
  return (
    <div className='container'>
        <div className="start">
      <div>  <p className="starting">Starting from</p>
      <h2 className="price">$22/ hr</h2></div>
      <button className="contact-btn">Contact Us ---&gt;</button>
      
        </div>
        <div className="des">
        <p className="description">
        With tools like ChatGPT and CoPilot, software development is being rapidly enabled by machines. Devsinc engineers are trained with these technologies, improving the ROI of your project.
      </p>
      <p className="description">
        Experience working with us for 2 weeks completely free of charge.
      </p>
      <p className="description">
        We guarantee that we will make a positive impact on your project or continue working for free until we do.
      </p>
      
      <hr />
      
      <h3 className="service-title">Software Outsourcing</h3>
      <p className="service-description">
        Let us handle end-to-end delivery with complete software development outsourcing.
      </p>
      
      <h3 className="service-title">Staff Augmentation</h3>
      <p className="service-description">
        Add talent to your existing team through Sillicom and save time on sourcing, recruiting, and training.
      </p>
        </div>
    
    </div>
  );
}

export default RightSide;
