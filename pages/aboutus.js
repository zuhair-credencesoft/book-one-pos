import React from "react";
import TopImageSection from "../components/TopImageSection";
import styles from "../styles/aboutus.module.css";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res1 = await client.getEntries({ content_type: "aboutUsPage" });
  const res2 = await client.getEntries({ content_type: "contactUsPage" });

  return {
    props: {
      test1: res1.items,
      test2: res2.items,
    },
  };
}

function AboutUs(props) {
  console.log(props.test2);
  return (
    <div className={styles.aboutContainer}>
      <TopImageSection
        image="/aboutus.svg"
        headingLeft="Our"
        headingRight="Journey"
        // description={props.test1[0].fields.aboutText}
        description={documentToReactComponents(props.test1[0].fields.aboutText)}
      />
      <div className={styles.secondSection}>
        <div className={styles.leftSection}>
          <div className={styles.leftSectionContent}>
            <h2>Any Question or Queries?</h2>
            <div className={styles.paragraph}>
              {/* <p> */}
              {documentToReactComponents(props.test2[0].fields.leftSection)}
              {/* </p> */}
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div>
            {/* <li>Head Office</li>
            <p>
              C-6-10-4-1, Sector-06, CBD Belapur, Navi Mumbai, 400614, Thane,
              Maharastra
            </p>
            <li>Write to us at</li>
            <p>hello@bookonepms.com</p>
            <li>Talk to our expert</li>
            <p>+91-9004146024</p>
            <li>Working Hour</li>
            <p>
              Monday to Sunday - <br />
              9:00am to 7:00pm (IST)
            </p> */}
            {documentToReactComponents(props.test2[0].fields.rightSection)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
