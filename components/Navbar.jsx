import styles from "../styles/Components/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";

const Navbar = () => {
  const [posDropdown, setPosDropdown] = useState(false);
  const [addDropdown, setAddDropdown] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <a>
            <Image
              height={100}
              width={100}
              layout="intrinsic"
              src="/Logo_Bookone-Vertical-1.svg"
              alt="bookone POS Logo"
            />
          </a>
        </Link>
      </div>
      <div className={styles.items}>
        <ul className={styles.unorderList}>
          <li className={styles.orderList}>POS</li>
          <Link href={"/integration"}>
            <li className={styles.orderList}>Integrations</li>
          </Link>
          <Link href={"/pricing"}>
            <li className={styles.orderList}>Pricing</li>
          </Link>
          <Link href={"/aboutus"}>
            <li className={styles.orderList}>About-Us</li>
          </Link>
        </ul>
      </div>
      <div className={styles.demoButton}>Take a Free demo</div>
    </div>
  );
};

export default Navbar;
