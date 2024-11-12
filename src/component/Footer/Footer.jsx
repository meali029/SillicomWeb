import React from 'react'
import styles from '../../Styling/footer.module.css';
import Left from './sides/Left';
import Middle from './sides/Middle';
import Right from './sides/Right';
const main =styles;
function Footer() {
  return (
    <section className={main["footer-section"]}>
      <div className={main["left"]}>
        <Left/>

      </div>
      <div className={main["middle"]}>
        <Middle/>
      </div>
      <div className={main["right"]}>
        <Right/>
      </div>
    </section>
  )
}

export default Footer
