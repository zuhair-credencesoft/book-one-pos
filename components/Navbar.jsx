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
          height={100}
          width={100}
          layout="intrinsic"
          src="/Logo_Bookone-Vertical-1.svg"
          alt="bookone POS Logo"
        />
      </div>
      <div className={styles.items}>
        <ul className={styles.unorderList}>
          <li className={styles.orderList}>POS</li>
          <li className={styles.orderList}>Integrations</li>
          <li className={styles.orderList}>Add-Ons</li>
          <li className={styles.orderList}>About-Us</li>
        </ul>
      </div>
      <div className={styles.demoButton}>Take a Free demo</div>
    </div>
  );
};

export default Navbar;
