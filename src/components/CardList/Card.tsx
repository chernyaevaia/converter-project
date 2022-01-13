import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { DiContainer } from '../../di';
import { ICardStore } from './CardStore';
import { CardViewModel } from './CardViewModel';
import { CardView } from './CardView';


export const Card: React.FC = observer(() => {
  const currencyCardStore = DiContainer.get(ICardStore);
  const viewModel = useMemo(() => new CardViewModel(currencyCardStore), [currencyCardStore]);

  if (!viewModel.ready) return null;

    return (
        <CardView 
        currencyType={viewModel.currencyType} 
        exchangeRate={viewModel.exchangeRate}
        />
    )
});