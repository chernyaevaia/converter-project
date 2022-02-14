import styles from './card.module.scss'

interface Props {
  currencyType: string;
  exchangeRate: number;
  change: number | undefined
}

export const CardView: React.FC<Props> = (props) => {
  return (
      <div className={styles.currencyItem}>
        <p className={styles.currencyType}>{props.currencyType}</p>
        <p className={styles.exchangeRate}>{props.exchangeRate}</p>
        {props.change! > 0 ? 
        <p className={styles.rateChangePlus}>{props.change}</p> : 
        <p className={styles.rateChangeMinus}>{props.change}</p>}
      </div>
        );
};
