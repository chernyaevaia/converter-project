import styles from './history.module.scss'
import redArrow from './red-arrow.svg'
import greenArrow from './green-arrow.svg'

interface Props {
  date: string;
  rate: string;
  change: string
}

export const HistoryView: React.FC<Props> = (props) => {
  return (
      <div className={styles.blocks}>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.rate}>{props.rate}</p>
        {props.change && +props.change > 0 ? 
        <p className={styles.change}>+{props.change}</p> : 
        <p className={styles.change}>{props.change}</p>}
        {props.change && +props.change > 0 ?
        <img src={greenArrow} alt=''/> :
        <img src={redArrow} alt=''/>}
      </div>
        );
};
