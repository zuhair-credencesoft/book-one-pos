import styles from "../styles/Components/TrustedCard.module.css";

export default function TrustedCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.title}>
        <h1>
          {props.title}
          {props.brackQuote && (
            <span className={styles.kitchenSpan}>
              {" "}
              (Kitchen ordering ticket)
            </span>
          )}
        </h1>
      </div>
      <hr className={styles.line} />
      <div className={styles.description}>
        {props.desc && <p>{props.description}</p>}
        {props.descOrder && (
          <ul className={styles.descUnorder}>
            <li className={styles.descOrder}>Sale Order Management</li>
            <li className={styles.descOrder}>Payment Management</li>
            <li className={styles.descOrder}>Expense Management</li>
            <li className={styles.descOrder}>Invoice Managemen</li>
          </ul>
        )}
      </div>
      <div className={styles.button}>
        <button>Know More</button>
      </div>
    </div>
  );
}
