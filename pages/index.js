import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [easy, setEasy] = useState(true);
  const [automation, setAutomation] = useState(false);
  const [one, setOne] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [efficient, setEfficient] = useState(false);
  const [integration, setIntegration] = useState(false);
  const [bottom, setBottom] = useState(false);

  const easyClick = () => {
    setEasy(!easy);
    setAutomation(false);
    setOne(false);
    setCustomer(false);
    setEfficient(false);
    setIntegration(false);
    setBottom(false);
  };
  const automationClick = () => {
    setAutomation(!automation);
    setEasy(false);
    setOne(false);
    setCustomer(false);
    setEfficient(false);
    setIntegration(false);
    setBottom(false);
  };

  const oneClick = () => {
    setOne(!one);
    setEasy(false);
    setAutomation(false);
    setCustomer(false);
    setEfficient(false);
    setIntegration(false);
    setBottom(false);
  };

  const customerClick = () => {
    setCustomer(!customer);
    setEasy(false);
    setAutomation(false);
    setOne(false);
    setEfficient(false);
    setIntegration(false);
    setBottom(false);
  };

  const efficientClick = () => {
    setEfficient(!efficient);
    setEasy(false);
    setAutomation(false);
    setOne(false);
    setCustomer(false);
    setIntegration(false);
    setBottom(false);
  };

  const integrationClick = () => {
    setIntegration(!integration);
    setEasy(false);
    setAutomation(false);
    setOne(false);
    setCustomer(false);
    setEfficient(false);
    setBottom(false);
  };

  const bottomClick = () => {
    setBottom(!bottom);
    setEasy(false);
    setAutomation(false);
    setOne(false);
    setCustomer(false);
    setEfficient(false);
    setIntegration(false);
  };

  return (
    <div>
      <Head>
        <title>bookone-POS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroContainer}>
        <div className={styles.leftSection}>
          <div className={styles.heroText}>
            <h1 className={styles.Text1}>
              First
              <span
                className={styles.gradientText}
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                mobile
              </span>{" "}
              POS software
            </h1>
            <p className={styles.Text2}>
              BookOnePOS solutions is unrivaled for providing a robust and
              flexible POS system that is reliable and unwavering in its
              performance, no matter the demands of your venue.
            </p>
            <button className={styles.heroTextButton}>Take a Free demo</button>
          </div>
          <div className={styles.polygon}>
            <img className={styles.polygonArrow} src="/heroArrow.svg"></img>
          </div>
        </div>
        <div className={styles.signUpContainer}>
          <div className={styles.signUpImg}>
            <img src="/Sign-Up.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.whyBigContainer}>
        <div className={styles.whyContainer}>
          <h3 className={styles.whyHeading}>Why BookOne POS?</h3>
          <div className={styles.tabContainer}>
            <ul className={styles.whyUnorderedList}>
              <li
                onClick={easyClick}
                style={{
                  backgroundColor: easy ? "black" : "",
                  color: easy ? "white" : "",
                }}
                className={styles.whyOrderList}
              >
                Easy Orders
              </li>
              <li
                onClick={automationClick}
                style={{
                  backgroundColor: automation ? "black" : "",
                  color: automation ? "white" : "",
                }}
                className={styles.whyOrderList}
              >
                Automation
              </li>
              <li
                onClick={oneClick}
                style={{
                  backgroundColor: one ? "black" : "",
                  color: one ? "white" : "",
                }}
                className={styles.whyOrderList}
              >
                One Stop
              </li>
              <li
                onClick={customerClick}
                style={{
                  backgroundColor: customer ? "black" : "",
                  color: customer ? "white" : "",
                }}
                className={styles.whyOrderList}
              >
                Customer Loyalty
              </li>
              <li
                onClick={efficientClick}
                style={{
                  backgroundColor: efficient ? "black" : "",
                  color: efficient ? "white" : "",
                }}
                className={styles.whyOrderList}
              >
                Efficient
              </li>
              <li
                onClick={integrationClick}
                style={{
                  backgroundColor: integration ? "black" : "",
                  color: integration ? "white" : "",
                }}
                className={styles.whyOrderList}
              >
                Integrations
              </li>
              <li
                onClick={bottomClick}
                style={{
                  backgroundColor: bottom ? "black" : "",
                  color: bottom ? "white" : "",
                }}
                className={styles.whyOrderList}
              >
                Bottoms-Up
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <img className={styles.bottomGradient} src="/Ellipse-137.svg" alt="" />
    </div>
  );
}
