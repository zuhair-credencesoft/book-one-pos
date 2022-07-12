import RightRestaurantImage from "../components/RightRestaurantImage";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import LeftRestaurantImage from "../components/LeftRestaurantImage";
import WhyBookOnePos from "../components/WhyBookOnePos";
import TrustedCard from "../components/TrustedCard";

import { AiOutlineDown } from "react-icons/ai";

export default function Home() {
  const [whyBookOnePos, setWhyBookOnePos] = useState({
    number: "01",
    description: {
      h2: "Orders - Once and Done",
      h3: "Sending all orders directly to your POS to reduce double handling and mistakes.",
    },
    img: "/Fast-Food.jpg",
  });
  const [easy, setEasy] = useState(true);
  const [automation, setAutomation] = useState(false);
  const [one, setOne] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [efficient, setEfficient] = useState(false);
  const [integration, setIntegration] = useState(false);
  const [bottom, setBottom] = useState(false);

  // const leftRightImgData = [
  //   {
  //     left: {
  //       heading: "Qracle",
  //       desc: "A QR scanner that enables guests to order meals from their table without having to call or wait for the waiter to deliver the menu card.",
  //       img: "/oracle.jpg",
  //       btn: true,
  //     },
  //     right: {
  //       heading: "Cross Platform",
  //       desc: "Our POS is capable of giving you insights into what is best for you. Such reports help you make better merchandising and pricing decisions in the future.",
  //       img: "/report.png",
  //     },
  //   },
  //   {
  //     left: {
  //       heading: "KOT",
  //       desc: "Reducing the risk due to manual mistakes, KOT saves time plus it greatly helps the management to have real-time reporting of all the orders that are placed at your restaurant.",
  //       img: "/kot.png",
  //       brackQuote: true,
  //     },
  //     right: {
  //       heading: "Complete Order Management",
  //       desc: false,
  //       img: "/management.png",
  //       btn: true,
  //       descOrder: true,
  //     },
  //   },
  //   {
  //     left: {
  //       heading: "Report Generation",
  //       desc: "  .",
  //       img: "/report.png",
  //     },
  //   },
  // ];

  const easyClick = () => {
    setEasy(!easy);
    setAutomation(false);
    setOne(false);
    setCustomer(false);
    setEfficient(false);
    setIntegration(false);
    setBottom(false);
    setWhyBookOnePos({
      number: "01",
      description: {
        h2: "Orders - Once and Done",
        h3: "Sending all orders directly to your POS to reduce double handling and mistakes.",
      },
      img: "/Fast-Food.jpg",
    });
  };
  const automationClick = () => {
    setAutomation(!automation);
    setEasy(false);
    setOne(false);
    setCustomer(false);
    setEfficient(false);
    setIntegration(false);
    setBottom(false);
    setWhyBookOnePos({
      number: "02",
      description: {
        h2: "Pass. Plate. Pronto",
        h3: "Automatically send tickets to the kitchen and serve customers faster.",
      },
      img: "/Business-Strategy.jpg",
    });
  };

  const oneClick = () => {
    setOne(!one);
    setEasy(false);
    setAutomation(false);
    setCustomer(false);
    setEfficient(false);
    setIntegration(false);
    setBottom(false);
    setWhyBookOnePos({
      number: "03",
      description: {
        h2: "A counter as clean as your kitchen",
        h3: "Reduce clutter with one central management system to manage all your business.",
      },
      img: "/Financing-Strategy.jpg",
    });
  };

  const customerClick = () => {
    setCustomer(!customer);
    setEasy(false);
    setAutomation(false);
    setOne(false);
    setEfficient(false);
    setIntegration(false);
    setBottom(false);
    setWhyBookOnePos({
      number: "04",
      description: {
        h2: "Get to know your regulars",
        h3: "Identify your most loyal customers and understand their tastes and preferences.",
      },
      img: "/Destination.jpg",
    });
  };

  const efficientClick = () => {
    setEfficient(!efficient);
    setEasy(false);
    setAutomation(false);
    setOne(false);
    setCustomer(false);
    setIntegration(false);
    setBottom(false);
    setWhyBookOnePos({
      number: "05",
      description: {
        h2: "More Customers, More Efficiency",
        h3: "Let Customers order and pay from the table and improve revenue per seat.",
      },
      img: "/Fast-Food.jpg",
    });
  };

  const integrationClick = () => {
    setIntegration(!integration);
    setEasy(false);
    setAutomation(false);
    setOne(false);
    setCustomer(false);
    setEfficient(false);
    setBottom(false);
    setWhyBookOnePos({
      number: "06",
      description: {
        h2: "Record of Sales",
        h3: "Send sales data from your POS to other apps in real time.",
      },
      img: "/Doctor.jpg",
    });
  };

  const bottomClick = () => {
    setBottom(!bottom);
    setEasy(false);
    setAutomation(false);
    setOne(false);
    setCustomer(false);
    setEfficient(false);
    setIntegration(false);
    setWhyBookOnePos({
      number: "07",
      description: {
        h2: "Bottoms Up!",
        h3: "Create efficiencies across your entire business and improve your bottom line.",
      },
      img: "/Doctor.jpg",
    });
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
            <img
              className={styles.polygonArrow}
              src="/heroArrow.svg"
              alt=""
            ></img>
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
          <WhyBookOnePos
            number={whyBookOnePos.number}
            description={whyBookOnePos.description}
            img={whyBookOnePos.img}
          />
        </div>
        <div className={styles.trustedRestContainer}>
          <h6>
            Trusted by <span>500+</span> Restaurants Partners
          </h6>
          {/* {leftRightImgData.map((val, i) => {
            return (
              <div key={i + 2}>
                <LeftRestaurantImage
                  heading={val.left.heading}
                  desc={val.left.desc}
                  img={val.left.img}
                  btn={val.left.btn}
                  brackQuote={val.left.brackQuote}
                />
                {val.right && (
                  <RightRestaurantImage
                    heading={val.right.heading}
                    desc={val.right.desc}
                    img={val.right.img}
                    btn={val.right.btn}
                    descOrder={val.right.descOrder}
                  />
                )}
              </div>
            );
          })} */}
          <div className={styles.cards}>
            <TrustedCard
              image="/oracle.jpg"
              title="Qracle"
              desc="true"
              description="A QR scanner that enables guests to order meals from their table without having to call or wait for the waiter to deliver the menu card."
            />
            <TrustedCard
              image="/report.png"
              title="Cross Platform"
              desc="true"
              description="Our POS is capable of giving you insights into what is best for you. Such reports help you make better merchandising and pricing decisions in the future."
            />
            <TrustedCard
              image="/kot.png"
              title="KOT"
              brackQuote="true"
              desc="true"
              description="Reducing the risk due to manual mistakes, KOT saves time plus it greatly helps the management to have real-time reporting of all the orders that are placed at your restaurant."
            />
            <TrustedCard
              image="/management.png"
              title="Complete Order Management"
              descOrder="true"
            />
            <TrustedCard
              image="/report.png"
              title="Report Generation"
              desc="true"
              description="Our POS is capable of giving you insights into what is best for you. Such reports help you make better merchandising and pricing decisions in the future."
            />
            <TrustedCard
              image="/kot.png"
              title="KOT"
              brackQuote="true"
              desc="true"
              description="Reducing the risk due to manual mistakes, KOT saves time plus it greatly helps the management to have real-time reporting of all the orders that are placed at your restaurant."
            />
            <TrustedCard
              image="/management.png"
              title="Complete Order Management"
              descOrder="true"
            />
            <TrustedCard
              image="/report.png"
              title="Report Generation"
              desc="true"
              description="Our POS is capable of giving you insights into what is best for you. Such reports help you make better merchandising and pricing decisions in the future."
            />
          </div>
          <div className={styles.showMore}>
            <button>
              Show More <AiOutlineDown style={{ paddingTop: "5px" }} />
            </button>
          </div>
        </div>
        <div className={styles.outletTypeContainer}>
          <div className={styles.outletType}>
            <h4>Outlet Types</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
              sed do eiusmod tempor incididunt.
            </p>
            <div className={styles.outletCards}>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
              <div className={styles.outletCard}>{/* <h6>My Card</h6> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
