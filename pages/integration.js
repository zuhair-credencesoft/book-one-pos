import React from "react";
import Link from "next/link";
import styles from "../styles/Integration.module.css";
export default class Integration extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.heroContainer}>
          <div className={styles.signUpContainer}>
            <div className={styles.FirstIntegrationImg}>
              <img src="/integration.svg" alt="" />
            </div>
          </div>
          <div className={styles.leftSection}>
            <div className={styles.heroText}>
              <h1 className={styles.Text1}>
                Lorem
                <span
                  className={styles.gradientText}
                  style={{ marginLeft: "15px", marginRight: "15px" }}
                >
                  Ipsum
                </span>{" "}
              </h1>
              <p className={styles.Text2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        {/* <div>
          <h3 className={styles.onlineHeading}>Online Order Integrations</h3>
        </div>
        <div className={styles.onlineContainer}>
          <div className={styles.integrationImg}>
            <img src="/swiggyZomato.svg" alt="" />
          </div>
        </div>
        <div>
          <h3 className={styles.paytmHeading}>Payment Integrations</h3>
        </div>
        <div className={styles.onlineContainer}>
          <div className={styles.integrationImg}>
            <img src="/googlepay.svg" alt="" />
          </div>
        </div> */}
        <div className={styles.onlineContainer}>
          <div className={styles.integrationImg}>
            <img src="/ZomatoSwiggy.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
