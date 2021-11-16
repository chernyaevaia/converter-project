import styles from './converter.module.scss'


const Converter: React.FC = () => {
    return (
        <>
        <div className={styles.converter}>
        <h3 className={styles.converter__header}>Конвертер валют</h3>
        <div className={styles['converter__dropdown-container-1']}>
        <select className={styles.converter__dropdown} name="currency" id="currency-from">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GPB">GPB</option>
          <option value="INR">INR</option>
          <option value="CHF">CHF</option>
          <option value="JPY">JPY</option>
        </select>
        <input className={styles.converter__input} type="number" />
      </div>
      <div className={styles['converter__dropdown-container-2']}>
        <select className={styles.converter__dropdown} name="currency" id="currency-to">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GPB">GPB</option>
          <option value="INR">INR</option>
          <option value="CHF">CHF</option>
          <option value="JPY">JPY</option>
        </select>
        <input className={styles.converter__input} type="number" />
      </div>
      </div>
      </>
    )
}

export default Converter;