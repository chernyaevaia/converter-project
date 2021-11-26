import styles from './converter.module.scss'

// распилить конвертер на 2 части?
//https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c 

//из toCurrency во fromCurrency - деление (if?)
// Handler для инпутов (e.target.value)
//onChange для дропдауна
// onChange для инпутов

// стейты для:
// - Списка валют
// - валюты from
// - валюты to
// - курса
// - Инпутов


//   const [rate, setRate] = useState(['USD', 'EUR', 'GBP', 'INR', 'CHF', 'JPY'])

// useEffect(() => {
//   fetch('https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c')
//     .then(res => res.json())
//      .then(response => response.data)
//.then(data => {
//  setOptions([data.base, ])
//})
//}, [])
//
// еще один useEffect?? повторный запрос когда выбираешь другую валюту??
// сброс инпутов??



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