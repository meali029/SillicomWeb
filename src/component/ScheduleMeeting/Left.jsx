import React from "react";
import styles from "../ScheduleMeeting/left.module.css";
const up = styles;
const Left = () => {
  return (
   <div className={up["container"]}>
     <div className={up["top"]}>
        <h1>
          <span>Schedule</span> a free consultation 
          <br /> with one of <span>our
          experts.</span>
        </h1>
      </div>
      <div className={up["bottom"]}>
        <p>
            Take the first step towards a brighter future and supercharge your
            business with cutting- <br />
            edge technologies, expert guidence and unparalleled support
            
        </p>
      </div>
      <button className={up["btn"]} > Schedule Now</button>
    
   </div>
  );
};

export default Left;
