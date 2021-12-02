//import styles from './currencyCard.module.scss';

// import { useState, useEffect } from "react";

// const USDRate = () => {

//

// useEffect(() => {
//   fetch("https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=USD")
//   .then(response => response.json())
//   .then(data => setRate(data.data))
// })

// return (
// <h1>{rate['RUB']}</h1>
// );
// }


import { useState, useEffect } from "react";
import styles from './currencyCard.module.scss'

export const CurrencyCard: React.FC = () => {
  // const [rate, setRate]: any = useState([])
  const [currencyType, setCurrencyType]: any = useState([])
  console.log(currencyType)

  useEffect(() => {
    fetch("https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=RUB")
    .then(response => response.json())
    .then(data => setCurrencyType([...Object.keys(data.data)]))
  },[])



  // useEffect(() => {
  //   fetch("https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=RUB")
  //   .then(response => response.json())
  //   .then(data => setRate(data.data))
  // },[])

  //     <h1>{(1/rate['USD']).toFixed(2)}</h1>

return (
<div className={styles.currencyContainer}>
{currencyType.map((item: string) => {
  return (
    <div className={styles.currencyItem}>
      <p className={styles.currencyType}>{item}</p>
    </div>
  )
})}
</div>
)
}

      // {rate.map((item: number) => {
      //   return (
      //     <p className={styles.exchangeRate}>{item[`${currencyType}`]}</p>
      //   )
      // })}
// return (
//   <div className={styles['news-container']}>
//   { news.map(item => {
//       return (<>
//         <h1 className={styles.headline}>{item['title']}</h1>
//         <p className={styles.description}>{item['description']}</p>
//         <img className={styles['news-pic']} alt="" src={item['urlToImage']}/>
//         </>  
//       );
//     })}
// </div>
// );
// }

//   { data.map(item => {
//       return (
//  <div className={styles.currencyItem}>
//         <h1>{(1/rate['USD']).toFixed(2)}</h1>
//         <h1>{currencyType}</h1>
//         </div>  
