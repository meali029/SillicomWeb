import React from 'react';
import styles from "../../Styling/schedulemeeting.module.css";
import Left from './Left';
import Right from './Right';
const s = styles;
function ScheduleMeeting() {
  return (
    <section className={s["meeting-section"]}>
     <div className={s["left"]}>
     <Left/>
     </div>
     <div className={s["right"]}>
      <Right/>
     </div>
    
    </section>
  );
}

export default ScheduleMeeting;
