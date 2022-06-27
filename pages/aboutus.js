import React from 'react';
import TopImageSection from '../components/TopImageSection';
import styles from '../styles/aboutus.module.css';

function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
        <TopImageSection />
        <div className={styles.secondSection}>
            <div className={styles.leftSection}></div>
            <div className={styles.rightSection}></div>
        </div>
    </div>
  )
}

export default AboutUs;