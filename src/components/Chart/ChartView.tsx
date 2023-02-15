import styles from './chart.module.scss';

interface Props {
  currencyType: string;
  exchangeRate: string;
  change: string | undefined;
}

export const ChartView: React.FC<Props> = (props) => {
  return (
    <>
      <p className={styles.currency}>{props.currencyType}</p>
      <p className={styles.rate}>{props.exchangeRate}</p>
      {+props.change! > 0 ? (
        <p className={styles.rateChangePlus}>+{props.change}</p>
      ) : (
        <p className={styles.rateChangeMinus}>{props.change}</p>
      )}
    </>
  );
};
