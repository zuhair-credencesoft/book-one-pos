import React from "react";
import TopImageSection from "../components/TopImageSection";
import styles from "../styles/aboutus.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
      <TopImageSection
        image="/aboutus.svg"
        headingLeft="Our"
        headingRight="Journey"
        description="CredenceSoft was formed in 2018 with the goal of utilizing the technology, expertise, and experience gathered over the years from diverse industries such as banking, insurance, finance, telecommunications, payment, and health. For our clients, we design, develop, and deploy industry-standard cloud-based, cost-effective, bespoke software, API services, and technology solutions based on contemporary open-source technologies and frameworks."
      />
      <div className={styles.secondSection}>
        <div className={styles.leftSection}></div>
        <div className={styles.rightSection}></div>
      </div>
    </div>
  );
}

export default AboutUs;
