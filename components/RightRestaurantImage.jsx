import styles from "../styles/Components/RightRestaurantImage.module.css";
import Image from "next/image";
import React from "react";

const RightRestaurantImage = ({ heading, desc, img, btn, descOrder }) => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.nextImage}>
          <Image
            className={styles.imagesProd}
            src={img}
            alt=""
            height={900}
            width={900}
            layout="intrinsic"
          />
        </div>
        <div className={styles.blogText}>
          <h3>{heading}</h3>
          {desc && <p>{desc}</p>}
          {descOrder && (
            <ul className={styles.descUnorder}>
              <li className={styles.descOrder}>Sale Order Management t</li>
              <li className={styles.descOrder}>Payment Management</li>
              <li className={styles.descOrder}>Expense Management</li>
              <li className={styles.descOrder}>Invoice Managemen</li>
            </ul>
          )}
          {btn && <button className={styles.knowButton}>Know More</button>}
        </div>
      </div>
    </div>
  );
};

export default RightRestaurantImage;
