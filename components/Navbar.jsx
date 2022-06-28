import styles from "../styles/Components/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);

  const handleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleDropDown2 = () => {
    setShowDropdown2(!showDropdown2);
  };
  const handleMenuDropDown = () => {
    setShowMenuDropdown(!showMenuDropdown);
  };

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
          {/* <a onClick={handleDropDown}> */}
          <a onMouseEnter={handleDropDown}  onMouseLeave={()=>{setShowDropdown(false)}}>
            <li className={styles.orderList}>
              POS
              <TiArrowSortedDown style={{ paddingTop: "5px" }} size={20} />
              {showDropdown && (
                <ul onMouseEnter={()=>{setShowDropdown(true)}} onMouseLeave={()=>{setShowDropdown(false)}} className={styles.orderListDropDown}>
                  <Link  href={'/pos/inventorymanagement'}><li>Inventory Management</li></Link>
                  <Link href={'/pos/humanResourceManagement'}><li>Human Resource Management</li></Link>
                  <Link href={'/pos/customerManagement'}><li>Customer Management</li></Link>
                  <Link href={'/pos/completeOrderManagement'}><li>Complete Order Management</li></Link>
                </ul>
              )}
            </li>
          </a>
          <Link href="/integration">
            <li onClick={()=>setShowDropdown(false)} className={styles.orderList}>Integrations</li>
          </Link>
          <Link href={"/pricing"}>
            <li onClick={()=>setShowDropdown(false)} className={styles.orderList}>Pricing</li>
          </Link>
          <Link href={"/aboutus"}>
            <li onClick={()=>setShowDropdown(false)} className={styles.orderList}>About-Us</li>
          </Link>
        </ul>
      </div>
      <div className={styles.demoButton}>Take a Free demo</div>
      <div className={styles.menuIcon}>
        {showMenuDropdown ? (
          <ImCross size={20} onClick={handleMenuDropDown} />
        ) : (
          <GiHamburgerMenu onClick={handleMenuDropDown} size={20} />
        )}
      </div>
      {showMenuDropdown && (
        <div className={styles.dropDownMenu}>
          <li onClick={handleDropDown2}>
            POS
            <span>
              <TiArrowSortedDown />
            </span>
          </li>
          {showDropdown2 ? (
            <ul className={styles.orderListDropDown2}>
              <Link href={'/pos/inventorymanagement'}><li onClick={()=>setShowMenuDropdown(false)}>Inventory Management</li></Link>
              <Link href={'/pos/humanResourceManagement'}><li onClick={()=>setShowMenuDropdown(false)}>Human Resource Management</li></Link>
              <Link href={'/pos/customerManagement'}><li onClick={()=>setShowMenuDropdown(false)}>Customer Management</li></Link>
              <Link href={'/pos/completeOrderManagement'}><li onClick={()=>setShowMenuDropdown(false)}>Complete Order Management</li></Link>
            </ul>
          ) : (
            ""
          )}
          <Link href={"/integration"}>
            <li onClick={()=>setShowMenuDropdown(false)}>Integrations</li>
          </Link>
          <Link href={"/pricing"}>
            <li onClick={()=>setShowMenuDropdown(false)}>Pricing</li>
          </Link>
          <Link href={"/aboutus"}>
            <li onClick={()=>setShowMenuDropdown(false)}>About-Us</li>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
