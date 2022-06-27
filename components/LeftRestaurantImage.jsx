import styles from "../styles/Components/RightRestaurantImage.module.css";
import Image from "next/image";
import React from "react";

const LeftRestaurantImage = ({ heading, img, desc, btn, brackQuote }) => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.blogText}>
          <h3>
            {heading}
            {brackQuote && (
              <span className={styles.kitchenSpan}>
                (Kitchen ordering ticket)
              </span>
            )}
          </h3>
          <p>{desc}</p>
          {btn && <button className={styles.knowButton}>Know More</button>}
        </div>
        <div className={styles.nextImage}>
          <Image src={img} alt="" height={900} width={900} layout="intrinsic" />
        </div>
      </div>
    </div>
  );
};

export default LeftRestaurantImage;
