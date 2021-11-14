import styles from './currencyCard.module.scss'

const CurrencyCard = () => {
    return (
        <div className={styles['currency-item']}>
        <span className={styles['currency-item__currency-type']}>EUR</span>
        <span className={styles['currency-item__exchange-rate']}>82.24</span>
        <span className={styles['currency-item__rate-change']}>+0.01</span>
      </div>
    )
}

export default CurrencyCard;