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
        <div className={styles.leftSection}>
          <div className={styles.leftSectionContent}>
            <h2>Any Question or Queries?</h2>
            <div className={styles.paragraph}>
              <p>
                Any questions or queries? Please do not hesitate to contact us.
                Whether you need emergency system down assistance or ongoing
                retail support, our team will ensure you get the right help,
                from the right person and when you need it. We always look
                forward to answering your questions.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <ul>
            <li>Head Office</li>
            <p>
              C-6-10-4-1, Sector-06, CBD Belapur, Navi Mumbai, 400614, Thane,
              Maharastra
            </p>
            <li>Write to us at</li>
            <p>hello@bookonepms.com</p>
            <li>Talk to our expert</li>
            <p>+91-9004146024</p>
            <li>Working Hour</li>
            <p>
              Monday to Sunday - <br />
              9:00am to 7:00pm (IST)
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
