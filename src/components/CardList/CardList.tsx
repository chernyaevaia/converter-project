import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { DiContainer } from '../../di';
import { ICardStore } from './CardStore';
import { CardListViewModel } from './CardListViewModel';
import { Card } from './Card';
import styles from './card.module.scss'
import { useParams } from 'react-router-dom';


export const CardList = observer(() => {
  const currencyCardStore = DiContainer.get(ICardStore);
  const viewModel = useMemo(() => new CardListViewModel(currencyCardStore), [currencyCardStore]);
  
  const {currencyCode} = useParams();
  console.log(currencyCode)
  
  if (!viewModel.ready) return null;

  return (<>
  <div className={styles.currencyContainer}>
    {viewModel.cards.map
    (card => <Card key={card.currencyType} card={card}/>)}</div>
    </>)
});

