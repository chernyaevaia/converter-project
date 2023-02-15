import styles from './card.module.scss';

interface Props {
  currencyType: string;
  exchangeRate: string;
  change: string | undefined;
}

export const CardView: React.FC<Props> = (props) => {
  return (
    <>
      <p className={styles.currencyType}>{props.currencyType}</p>
      <p className={styles.exchangeRate}>{props.exchangeRate}</p>
      {props.change && +props.change > 0 ? (
        <p className={styles.rateChangePlus}>+{props.change}</p>
      ) : (
        <p className={styles.rateChangeMinus}>{props.change}</p>
      )}
    </>
  );
};
