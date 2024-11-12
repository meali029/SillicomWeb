import React from 'react';
import '../AboutUs/left.css';
import logo from '../../assets/About/logo.png';

import image1 from '../../assets/About/pic1.png' 
import image2 from '../../assets/About/pic2.png' 

const Left = () => {
  return (
    <div className="left-container">
      <div className="img">
      <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="img1">
      <img src={image2} alt="Team Working" className="team-image" />

      </div>
      <div className="img2">
      <img src={image1} alt="Team Working" className="team-image" />

      </div>
    </div>
  );
}

export default Left;
