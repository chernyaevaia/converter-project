import styles from './history.module.scss'
import redArrow from './red-arrow.svg'
import greenArrow from './green-arrow.svg'

interface Props {
  date: string;
  rate: number;
  change: number
}

export const HistoryView: React.FC<Props> = (props) => {
  return (
      <div className={styles.blocks}>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.rate}>{props.rate}</p>
        <p className={styles.change}>{props.change}</p>
        {props.change > 0 ?
        <img src={greenArrow} alt=''/> :
        <img src={redArrow} alt=''/>}
      </div>
        );
};

// {props.change! > 0 ? 
//   <p className={styles.rateChangePlus}>{props.change}</p> : 
//   <p className={styles.rateChangeMinus}>{props.change}</p>}
// <img className={styles.newsPic} src={props.urlToImage} alt="" />