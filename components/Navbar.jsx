import styles from "../styles/Components/Navbar.module.css";
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";

const Navbar = () => {
  const [posDropdown, setPosDropdown] = useState(false);
  const [addDropdown, setAddDropdown] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          height={120}
          width={120}
          layout="intrinsic"
          src="/Logo_Bookone-Vertical-1.svg"
          alt="bookone POS Logo"
        />
      </div>
      <div className={styles.items}>
        <ul className={styles.unorderList}>
          <a
            onMouseOver={() => {
              setPosDropdown(true);
            }}
            onMouseLeave={() => {
              setPosDropdown(false);
            }}
          >
            <li
              className={styles.dropOrderList}
              onMouseOver={() => {
                setPosDropdown(true);
              }}
              onMouseLeave={() => {
                setPosDropdown(false);
              }}
            >
              POS
              <TiArrowSortedDown className={styles.downArrow} />
              {posDropdown && (
                <ul className={styles.dropdownOptions}>
                  <li className={styles.dropdownList}>Option One</li>
                  <li className={styles.dropdownList}>Option Two</li>
                  <li className={styles.dropdownList}>Option Three</li>
                </ul>
              )}
            </li>
          </a>
          <li className={styles.orderList}>Integrations</li>
          <a
            onMouseOver={() => {
              setAddDropdown(true);
            }}
            onMouseLeave={() => {
              setAddDropdown(false);
            }}
          >
            <li
              className={styles.dropOrderList}
              onMouseOver={() => {
                setAddDropdown(true);
              }}
              onMouseLeave={() => {
                setAddDropdown(false);
              }}
            >
              Add-Ons
              <TiArrowSortedDown className={styles.downArrow} />
              {addDropdown && (
                <ul className={styles.dropdownAddOptions}>
                  <li className={styles.dropdownList}>Option One</li>
                  <li className={styles.dropdownList}>Option Two</li>
                  <li className={styles.dropdownList}>Option Three</li>
                </ul>
              )}
            </li>
          </a>
          <li className={styles.orderList}>About-Us</li>
        </ul>
      </div>
      <div className={styles.demoButton}>Take a Free demo</div>
    </div>
  );
};

export default Navbar;
