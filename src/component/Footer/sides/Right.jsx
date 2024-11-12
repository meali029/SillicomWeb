import React from 'react'
import styles from '../sides/right.module.css'
import logo from '../../../assets/Footer/logo.png'

const right = styles;
const Right = () => {
  return (
    <div>
      <img src={logo} alt="" className={right["logo"]} />
    </div>
  )
}

export default Right
