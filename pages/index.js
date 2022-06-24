import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>bookone POS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroContainer}>
        <div className={styles.leftSection}>
        <div className={styles.heroText}>
          <h1 className={styles.Text1}>
            First<span className={styles.gradientText} style={{marginLeft: '15px'}}>mobile</span> POS software
          </h1>
          <p className={styles.Text2}>
          BookOnePOS solutions is unrivaled for providing a robust and flexible POS system that is reliable and unwavering in its performance, no matter the demands of your venue.
          </p>
          <button className={styles.heroTextButton}>Take a Free demo</button>
        </div>
        <div  className={styles.polygon}>
        <img className={styles.polygonLine} src='/Vector-954.jpg'></img>
        <img className={styles.polygonArrow} src='/Polygon-1.jpg'></img>
      </div>
        </div>
        <div className={styles.signUpContainer}>
          <div className={styles.signUpImg}>
          <img src="/Sign-Up.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
