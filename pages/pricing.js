import React from "react";
import styles from "../styles/Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.firstSection}>
          <div className={styles.imgSection}>
            <img src={"/pricing.svg"} alt="" />
          </div>
          <div className={styles.firstHead}>
            <h3>
              Lorem <span>Ipsum</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={styles.secondSection}>
          <h4>What you get?</h4>
          <div className={styles.whatYouContainer}>
            <div className={styles.firstWhatGet}>
              <ul>
                <li>365 days service</li>
                <p>
                  Our customer service team are always
                  <br /> available to help you 24x7.
                </p>
                <li>Cloud based</li>
                <p>
                  Access the software from anywhere and
                  <br /> anytime via a web browser.
                </p>
                <li>Accessible on iOS and Android</li>
                <p>
                  Available on both operating systems
                  <br /> Google Play Store and Apple App Store
                </p>
              </ul>
            </div>
            <div className={styles.firstWhatGet}>
              <ul>
                <li>One login for numerous users</li>
                <p>
                  No need of creating multiple accounts, use
                  <br /> one login for more than one business
                </p>
                <li>Examine daily reports.</li>
                <p>
                  See your daily revenue, expenses,
                  <br /> orders in just few clicks.
                </p>
                <li>
                  Hotels and Restaurants can be
                  <br /> managed using the same software.
                </li>
                <p>
                  No need to use different software for your hotels.
                  <br /> BookonePOS can manage multiple services in one
                  platform.
                </p>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.thirdSection}>
          <div className={styles.basicAndPremiumContainer}>
            <h2>
              BookOne POS
              <br /> Basic
            </h2>
            <ul>
              <li>Yes</li>
            </ul>
          </div>
          <div className={styles.basicAndPremiumContainer}>
            <h2>
              BookOne POS
              <br /> Premium
            </h2>
            <ul>
              <li>Yes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
