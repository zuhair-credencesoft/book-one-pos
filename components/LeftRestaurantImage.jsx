import styles from "../styles/Components/RightRestaurantImage.module.css";
import Image from "next/image";
import React from "react";

const LeftRestaurantImage = ({ heading, img, desc }) => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.nextImage}>
          <Image src={img} alt="" height={900} width={900} layout="intrinsic" />
        </div>
        <div className={styles.blogText}>
          <h3>{heading}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftRestaurantImage;
