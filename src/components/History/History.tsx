import styles from './history.module.scss'
import moment from 'moment';


const today = moment(new Date()).format("DD.MM.YY")
const day1 = moment(new Date()).subtract(1, 'days').format("DD.MM.YY")
const day2 = moment(new Date()).subtract(2, 'days').format("DD.MM.YY")
const day3 = moment(new Date()).subtract(3, 'days').format("DD.MM.YY")
const day4 = moment(new Date()).subtract(4, 'days').format("DD.MM.YY")


const History: React.FC = () => {
    return (
        <div className={styles['history-container']}>

        <h3 className={styles['history-container__header']}>За последние 5 дней</h3>
  
        <div className={styles['history-container__blocks']}>
        <div className={styles.blocks__white}></div>
        <div className={styles.blocks__white}></div>
        <div className={styles.blocks__white}></div>
        </div>
  
        <div className={styles['history-container__data']}>
  
          <p className={styles['history-container__date-text']}>Дата</p>
          <p className="history-container__rate-text">Курс</p>
          <p className="history-container__change-text">Изменение</p>
  
          <p className={styles['history-container__date']}>{today}</p>
          <p className={styles['history-container__rate']}>72.3211</p>
          <p className={styles['history-container__change']}>0.01</p>
  
          <p className={styles['history-container__date']}>{day1}</p>
          <p className={styles['history-container__rate']}>72.3211</p>
          <p className={styles['history-container__change']}>0.01</p>
          
          <p className={styles['history-container__date']}>{day2}</p>
          <p className={styles['history-container__rate']}>72.3211</p>
          <p className={styles['history-container__change']}>0.01</p>
  
          <p className={styles['history-container__date']}>{day3}</p>
          <p className={styles['history-container__rate']}>72.3211</p>
          <p className={styles['history-container__change']}>0.01</p>
  
          <p className={styles['history-container__date']}>{day4}</p>
          <p className={styles['history-container__rate']}>72.3211</p>
          <p className={styles['history-container__change']}>0.01</p>
        </div>
        </div>
    )
}

export default History;