import styles from './history.module.scss'

interface Props {
  date: string;
  rate: number;
  change: number
}

export const HistoryView: React.FC<Props> = (props) => {
  return (
      <div className={styles.blocks}>
        <p className={styles.rate}>{props.rate}</p>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.change}>{props.change}</p>
      </div>
        );
};