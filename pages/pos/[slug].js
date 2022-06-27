import React from "react";
import styles from "../../styles/Pos.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.sectionOne}>
        <h5>Inventory management</h5>
        <p>
          Inventory management, at its very essence, keeps track of all products
          so you know when it’s time to order/or not order specific products.
        </p>
        <ul>
          <li>
            Purchase order list : This will allow you to add the suppliers who
            supply your goods and record information such as address, phone
            number, and product status.
          </li>
          <li>
            Recipe Management: This assists you in delivering recipe details
            regarding the type of ingredients used and the quantity utilized. It
            also displays the type of recipe and the number of persons served.
          </li>
        </ul>
      </div>
      <div className={styles.sectionTwo}>
        <Image
          src="/inventoryTwo.svg"
          alt=""
          height={600}
          width={600}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default Slug;
