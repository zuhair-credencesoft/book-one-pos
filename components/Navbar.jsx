import styles from "../styles/Components/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);

  const handleDropDown = ()=>{
    setShowDropdown(!showDropdown);
  }
  const handleDropDown2 = ()=>{
    setShowDropdown2(!showDropdown2);
    console.log(showDropdown2)
  }
  const handleMenuDropDown = ()=>{
    setShowMenuDropdown(!showMenuDropdown);
  }

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
          <a onClick={handleDropDown} >
          <li className={styles.orderList} >POS<TiArrowSortedDown style={{paddingTop: '5px'}} size={20} />
          {showDropdown && <ul className={styles.orderListDropDown}>
            <li>Inventory Management</li>
            <li>Human Resource Management</li>
            <li>Customer Management</li>
          </ul>}
          </li>
          </a>
          <li className={styles.orderList}>Integrations</li>
          <Link href={"/pricing"}>
            <li className={styles.orderList}>Pricing</li>
          </Link>
          <Link href={"/aboutus"}>
            <li className={styles.orderList}>About-Us</li>
          </Link>
        </ul>
      </div>
      <div className={styles.demoButton}>Take a Free demo</div>
      <div className={styles.menuIcon} >
        {showMenuDropdown?<ImCross size={30} onClick={handleMenuDropDown}/>:<GiHamburgerMenu onClick={handleMenuDropDown} size={30}/>}</div>
      {showMenuDropdown && <div className={styles.dropDownMenu}>
        <li onClick={handleDropDown2}>POS<span>< TiArrowSortedDown /></span>
        </li>
          {showDropdown2? 
          <ul className={styles.orderListDropDown2}>
            <li>Inventory Management</li>
            <li>Human Resource Management</li>
            <li>Customer Management</li>
          </ul>: ''}
        <li>Integrations</li>
        <li>Pricing</li>
        <li>About-Us</li>
      </div>}
    </div>
  );
};

export default Navbar;
