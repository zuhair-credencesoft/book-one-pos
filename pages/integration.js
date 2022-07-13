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

        <div className={styles.integration}>
          <div className={styles.leftSection1}>
            <div className={styles.heading}>
              <h1>
                <span>Payment & </span>
                <br />
                Online Order Integration
              </h1>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.contents}>
              <div className={styles.row}>
                <div className={styles.content}>
                  <Link href="/">
                    <img src="/Zomato_Logo 1.png" alt="" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <Link href="/">
                    <img src="/images 1.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.content}>
                  <Link href="/">
                    <img src="/Swiggy_Logo 1.png" alt="" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <Link href="/">
                    <img src="/Payment Icons.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileIntegration}>
          <h4>Payment & Online Order Integration</h4>
          <div className={styles.integrationCards}>
            <div className={styles.integrationCard}>
              <Link href="/">
                <img src="/Zomato_Logo_Mobile.png" alt="" />
              </Link>
            </div>
            <div className={styles.integrationCard}>
              {/* <h6>My Card</h6> */}
            </div>
            <div className={styles.integrationCard}>
              {/* <h6>My Card</h6> */}
            </div>
            <div className={styles.integrationCard}>
              {/* <h6>My Card</h6> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
