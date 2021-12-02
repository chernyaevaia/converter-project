import styles from './currencyCard.module.scss';

interface Props {
  currencyType: string;
  exchangeRate: number;
  rateChange: number;
}

export const CurrencyCardView: React.FC<Props> = (props) => {
  return (
    <div className={styles.currencyContainer}>
        <p className={styles.currencyType}>{props.currencyType}</p>
        <p className={styles.exchangeRate}>{props.exchangeRate}</p>
        <p className={styles.rateChange}>{props.rateChange}</p>
          </div>
        );
};
