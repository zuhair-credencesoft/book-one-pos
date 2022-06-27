import React from 'react';
import styles from '../styles/Components/TopImageSection.module.css';

function TopImageSection() {
  return (
    <div className={styles.firstSection}>
            <div className={styles.leftSection}>
            <img src="/aboutus.svg" alt="" />
            </div>
            <div className={styles.rightSection}>
                <h1>Our <span className={styles.gradientText}>Journey</span> </h1>
                <p>CredenceSoft was formed in 2018 with the goal of utilizing the technology, expertise, and experience gathered over the years from diverse industries such as banking, insurance, finance, telecommunications, payment, and health. For our clients, we design, develop, and deploy industry-standard cloud-based, cost-effective, bespoke software, API services, and technology solutions based on contemporary open-source technologies and frameworks.</p>
            </div>
        </div>
  )
}

export default TopImageSection;