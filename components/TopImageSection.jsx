import React from 'react';
import styles from '../styles/Components/TopImageSection.module.css';

function TopImageSection({image,headingLeft,headingRight,description}) {
  return (
    <div className={styles.firstSection}>
            <div className={styles.leftSection}>
            <img src={image} alt="" />
            </div>
            <div className={styles.rightSection}>
                <h1>{headingLeft}{" "}<span className={styles.gradientText}>{headingRight}</span> </h1>
                <p>{description}</p>
            </div>
        </div>
  )
}

export default TopImageSection;