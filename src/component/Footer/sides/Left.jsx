import React from 'react'
import styles from '../sides/left.module.css'
import logo from '../../../assets/Footer/sillicom.png'
import email from '../../../assets/Footer/email.png'
import wa from '../../../assets/Footer/wa.png'
import linkedin from '../../../assets/Footer/linkedin.png'

const left = styles;
const Left = () => {
  return (
    <>
    <div className={left["logo"]}>
    <img src={logo} alt="" className={left["logo-img"]} />
    </div>
    <div className={left["step"]}>
        <h3>
            Take the first step towaresd a a brighter future and <br />
            superchange your business with cutting edge <br />
            Technologies, expert guidance and unparalleled support
        </h3>
    </div>
    <div className={left["email"]}>
        <h1>
            info@Sillicom.com
        </h1>
    </div>
    <div className={left["media"]}>
    <div>
    <img src={email} alt="" />

    </div>
    <div>
    <img src={wa} alt="" />

    </div>
    <div>
    <img src={linkedin} alt="" />

    </div>

    </div>
    <div className={left["sub"]}>
        <h1>
            Subscribe
        </h1>
        <p>
            Stay Updated with the latest in tech
        </p>
    </div>
    <div className={left["email"]}>
        <h1>Email <span>*</span></h1>
        <input type="email" />
    </div>
    
    </>
  )
}

export default Left
