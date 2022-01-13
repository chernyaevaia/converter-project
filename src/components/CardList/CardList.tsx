// import { observer } from 'mobx-react';
// import { useMemo } from 'react';
// import { DiContainer } from '../../di';
// import { ICardStore } from './CardStore';
// import { CardListViewModel } from './CardListViewModel';
// import { CardView } from './CardView';
// import styles from './card.module.scss'
export {}
// export const CardList = observer(() => {
//   const currencyCardStore = DiContainer.get(ICardStore);
//   const viewModel = useMemo(() => new CardListViewModel(currencyCardStore), [currencyCardStore]);

//   if (!viewModel.ready) return null;

//   return (  
//     viewModel.rates.map(rate => <div className={styles.currencyContainer}>
//     <CardView
//     currencyType={rate.currencyType}
//     exchangeRate={rate.exchangeRate}
//   />
//   </div>))

// });