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
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>365 days service</h1>
                    <p>
                      Our customer service team are always available to help you
                      24x7.
                    </p>
                  </div>
                </div>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>Cloud based</h1>
                    <p>
                      Access the software from anywhere and anytime via a web
                      browser.
                    </p>
                  </div>
                </div>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>Accessible on iOS and Android</h1>
                    <p>
                      Available on both operating systems Google Play Store and
                      Apple App Store
                    </p>
                  </div>
                </div>
              </ul>
            </div>
            <div className={styles.firstWhatGet}>
              <ul>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>One login for numerous users</h1>
                    <p>
                      No need of creating multiple accounts, use one login for
                      more than one business
                    </p>
                  </div>
                </div>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>Examine daily reports.</h1>
                    <p>
                      See your daily revenue, expenses, orders in just few
                      clicks.
                    </p>
                  </div>
                </div>
                <div className={styles.part}>
                  <div className={styles.circle}></div>
                  <div className={styles.content}>
                    <h1>
                      Hotels and Restaurants can be managed using the same
                      software.
                    </h1>
                    <p>
                      No need to use different software for your hotels.
                      BookonePOS can manage multiple services in one platform.
                    </p>
                  </div>
                </div>
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
