import styles from "../styles/Components/RightRestaurantImage.module.css";
import Image from "next/image";
import React from "react";

const RightRestaurantImage = ({ heading, desc, img }) => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.blogText}>
          <h3>{heading}</h3>
          <p>{desc}</p>
        </div>
        <div className={styles.nextImage}>
          <Image src={img} alt="" height={900} width={900} layout="intrinsic" />
        </div>
      </div>
    </div>
  );
};

export default RightRestaurantImage;
