import React from 'react'
import styles from "../ScheduleMeeting/right.module.css";
import pic1 from '../../assets/Schedule/pic1.jpg';
import pic2 from '../../assets/Schedule/pic2.jpg';
import pic3 from '../../assets/Schedule/pic3.jpg';


const down = styles;
const Right = () => {
  return (
    <div className={down["container"]}>
      <div>
        <img src={pic3} alt=""className={down["pic1"]} />
      </div>
      <div>
      <img src={pic1} alt=""  className={down["pic2"]}/>

      </div>
      <div>
      <img src={pic2} alt="" className={down["pic3"]} />

      </div>
    </div>
  )
}

export default Right
