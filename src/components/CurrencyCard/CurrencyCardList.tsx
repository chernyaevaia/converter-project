import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { DiContainer } from '../../di';
import { ICurrencyCardStore } from './CurrencyCardStore';
import { CurrencyCardListViewModel } from './CurrencyCardListViewModel';
import { CurrencyCardView } from './CurrencyCardView';


export const CurrencyCardList: React.FC = observer(() => {
  const currencyCardStore = DiContainer.get(ICurrencyCardStore);
  const viewModel = useMemo(() => new CurrencyCardListViewModel(currencyCardStore), [currencyCardStore]);

  return (  
    viewModel.rates.map(rate => <CurrencyCardView
    currencyType={rate.currencyType}
    exchangeRate={rate.exchangeRate}
  />))

});



//active={viewModel.activeRateType === rate.currencyType}

//отмапить данные, засунув в вьюшку

// import { useState, useEffect } from "react";
// import styles from './currencyCard.module.scss'

// export const CurrencyCard: React.FC = () => {
//   const [rate, setRate]: any = useState([])
//   const [currencyType, setCurrencyType]: any = useState([])
//   console.log(currencyType)

//   useEffect(() => {
//     fetch("https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=RUB")
//     .then(response => response.json())
//     .then(data => setCurrencyType([...Object.keys(data.data)]))
//   },[])

//   useEffect(() => {
//     fetch("https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=RUB")
//     .then(response => response.json())
//     .then(data => setRate(data.data))
//   },[])


// return (
// <div className={styles.currencyContainer}>
// {currencyType.map((item: string) => {
//   return (
//     <div className={styles.currencyItem}>
//       <p className={styles.currencyType}>{item}</p>
//       <p className={styles.exchangeRate}>{(1/rate[item]).toFixed(2)}</p>
//     </div>
//   )
// })}
// </div>
// )
// }
 
