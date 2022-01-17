import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { DiContainer } from '../../di';
import { ICardStore } from './CardStore';
import { CardListViewModel } from './CardListViewModel';
import { Card } from './Card';
import styles from './card.module.scss'

export const CardList = observer(() => {
  const currencyCardStore = DiContainer.get(ICardStore);
  const viewModel = useMemo(() => new CardListViewModel(currencyCardStore), [currencyCardStore]);

  if (!viewModel.ready) return null;

  return (<div className={styles.currencyContainer}>
    {viewModel.rates.map(rate => <Card key={rate.currencyType} currencyType={rate.currencyType} exchangeRate={rate.exchangeRate} />)}</div>)

});