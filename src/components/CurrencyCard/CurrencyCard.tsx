import './currencyCard.css'

const CurrencyCard = () => {
    return (
        <div className="currency-item">
        <span className="currency-item__currency-type">EUR</span>
        <span className="currency-item__exchange-rate">82.24</span>
        <span className="currency-item__rate-change">+0.01</span>
      </div>
    )
}

export default CurrencyCard;