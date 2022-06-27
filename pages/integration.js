import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
export default class Integration extends React.Component {
  render() {
    return (
      <div className="lg:container lg:mx-auto">
        <div className="flex lg:mx-20 ">
          <div className="lg:w-1/2 w-full">
            <img
              src="/integration.svg"
              alt=""
              className="lg:h-[40rem] lg:w-[40rem]"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-8xl font-bold mt-32  text-center">
              Lorem
              <span
                className={styles.gradientText}
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                Ipsum
              </span>
            </p>
            <p className="mt-8 text-center text-2xl font-['Open_Sans']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-center text-7xl ">
            Online Order Integrations
          </p>
        </div>
        <div className="container px-20 mt-10">
          <img src="/swiggyZomato.svg" alt="" />
        </div>
        <div className="mt-20">
          <p className="font-semibold text-center text-7xl ">
            Payment Integrations
          </p>
        </div>
        <div className="container px-20 mt-10">
          <img src="/googlepay.svg" alt="" />
        </div>
      </div>
    );
  }
}
