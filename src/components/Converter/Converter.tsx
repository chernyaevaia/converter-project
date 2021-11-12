import './converter.css'

const Converter = () => {
    return (
        <>
        <div className="converter">
        <h3 className="converter__header">Конвертер валют</h3>
        <div className="converter__dropdown-container-1">
        <select className="converter__dropdown" name="currency" id="currency-from">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GPB">GPB</option>
          <option value="INR">INR</option>
          <option value="CHF">CHF</option>
          <option value="JPY">JPY</option>
        </select>
        <input className="converter__input" type="number" />
      </div>
      <div className="converter__dropdown-container-2">
        <select className="converter__dropdown" name="currency" id="currency-to">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GPB">GPB</option>
          <option value="INR">INR</option>
          <option value="CHF">CHF</option>
          <option value="JPY">JPY</option>
        </select>
        <input className="converter__input" type="number" />
      </div>
      </div>
      </>
    )
}

export default Converter;