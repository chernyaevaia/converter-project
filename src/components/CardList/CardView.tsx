import styles from './card.module.scss'

interface Props {
  currencyType: string;
  exchangeRate: number;
  change: number
}

export const CardView: React.FC<Props> = (props) => {
  return (
      <div className={styles.currencyItem}>
        <p className={styles.currencyType}>{props.currencyType}</p>
        <p className={styles.exchangeRate}>{props.exchangeRate}</p>
        <p className={styles.exchangeRate}>{props.change}</p>
      </div>
        );
};
