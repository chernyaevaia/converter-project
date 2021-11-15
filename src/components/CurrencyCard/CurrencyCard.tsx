import styles from "./currencyCard.module.scss";

const CurrencyCard = () => {
  return (
    <>
      <div className={styles["currency-container"]}>
        <div className={styles["currency-item"]}>
          <span className={styles["currency-item__currency-type"]}>USD</span>
          <span className={styles["currency-item__exchange-rate"]}>71.44</span>
          <span className={styles["currency-item__rate-change"]}>+0.01</span>
        </div>
        <div className={styles["currency-item"]}>
          <span className={styles["currency-item__currency-type"]}>EUR</span>
          <span className={styles["currency-item__exchange-rate"]}>82.35</span>
          <span className={styles["currency-item__rate-change"]}>+0.01</span>
        </div>
        <div className={styles["currency-item"]}>
          <span className={styles["currency-item__currency-type"]}>GPB</span>
          <span className={styles["currency-item__exchange-rate"]}>90.11</span>
          <span className={styles["currency-item__rate-change"]}>+0.01</span>
        </div>
        <div className={styles["currency-item"]}>
          <span className={styles["currency-item__currency-type"]}>INR</span>
          <span className={styles["currency-item__exchange-rate"]}>10.06</span>
          <span className={styles["currency-item__rate-change"]}>+0.01</span>
        </div>
        <div className={styles["currency-item"]}>
          <span className={styles["currency-item__currency-type"]}>CHF</span>
          <span className={styles["currency-item__exchange-rate"]}>80.04</span>
          <span className={styles["currency-item__rate-change"]}>+0.01</span>
        </div>
        <div className={styles["currency-item"]}>
          <span className={styles["currency-item__currency-type"]}>JPY</span>
          <span className={styles["currency-item__exchange-rate"]}>25.13</span>
          <span className={styles["currency-item__rate-change"]}>+0.01</span>
        </div>
      </div>
    </>
  );
};

export default CurrencyCard;
