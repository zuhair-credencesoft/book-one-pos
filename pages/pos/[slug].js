import React from "react";
import styles from "../../styles/Pos.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import PosData from "../../posData";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  let pageData = {};
  PosData.forEach((element) => {
    if (element[slug]) {
      pageData = element[slug];
    }
  });

  return (
    <div className={styles.firstSection}>
      <div className={styles.title}>
        <h5>{pageData.heading}</h5>
        <div className={styles.lines}>
          <hr className={styles.blueLine} />
          <hr className={styles.yellowLine} />
        </div>
        {pageData.descriptionHeading && (
          <p className={styles.descriptionHeading}>
            {pageData.descriptionHeading}
          </p>
        )}
      </div>
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          {pageData.description && <p>{pageData.description}</p>}
          {pageData.listItems && (
            <ul>
              <li>{pageData.listItems.listItem1}</li>
              <li>{pageData.listItems.listItem2}</li>
              {pageData.listItems.listItem3 ? (
                <li>{pageData.listItems.listItem3}</li>
              ) : (
                ""
              )}
              {pageData.listItems.listItem4 ? (
                <li>{pageData.listItems.listItem4}</li>
              ) : (
                ""
              )}
            </ul>
          )}
        </div>
        <div className={styles.sectionTwo}>
          {pageData.image ? <img src={pageData.image} alt="" /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Slug;
