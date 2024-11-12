import React from 'react'
import '../../Styling/header.css';
import sillicomLogo from '../../assets/Header/sillicom.png';
import fblogo from '../../assets/Header/email.png';
import instalogo from '../../assets/Header/linkedin.png';
import linklogo from '../../assets/Header/wa.png';
import laptop from '../../assets/Header/laptop.png';
import '../../Responsive/Header/headres.css';
function Header() {
  return (
   <section className="header-section">
    <div className="nav-bar"> 
      <div className="logo">
      <img src={sillicomLogo} alt="" />
      </div>
      <div className="nav">
        <div className="social">
          <div className="accounts">
            <img src={instalogo} alt="" />
          </div>
          <div className="accounts">
          <img src={linklogo} alt="" />

          </div>
          <div className="accounts">
          <img src={fblogo} alt="" />

          </div>
        </div>
        <div className="elements">
          <button>
            About

          </button>
          <button>
            Services
          </button>
          
          <button>
            Careers
          </button>
          <button>
            Learning
          </button>
          <button>
            Contact
          </button>
        </div>
      </div>
    </div>
    <div className="main">
    <div className="main-text">
      <div className='industry'> 
        <h1>
          Be the <span className='market'>Market Leader</span>
        </h1>
        <h1>in your Industry </h1>
      </div>
      <div className='description'>
        <p>Welcome to Sillicom Technologies The trusted digital</p>
        <p>marketingh agency in islamabad. Prepare for the </p>
        <p>exponential growth of your business with our</p>
        <p>comprehensive digital marketingh service across Pakistan</p>
      </div>
      <div className='free-call'>
        <button className="schedule">Schedule Free Strategy Call</button>
        <button className="see-work"> See our Work</button>

      </div>
    </div>
    <div className="main-pic">
      <img src={laptop} alt="" />
    </div>
    </div>
   </section>
  )
}

export default Header
