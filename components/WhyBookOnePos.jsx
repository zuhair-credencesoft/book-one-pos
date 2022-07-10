import React from "react";
import styles from "../styles/Components/WhyBookOnePos.module.css";

function WhyBookOnePos({ number, description, img }) {
  return (
    <div className={styles.whyBookOnePosContainer}>
      <div className={styles.whyBookOnePosLeftSection}>
        <div className={styles.srNo}>
          <h1>{number}</h1>
        </div>
        <div className={styles.whyBookOnePosDesc}>
          <h2>{description.h2}</h2>
          <h3>{description.h3}</h3>
        </div>
      </div>
      <div className={styles.whyBookOnePosRightSection}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default WhyBookOnePos;
