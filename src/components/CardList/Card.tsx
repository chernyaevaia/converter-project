import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { DiContainer } from '../../di';
import { ICardStore } from './CardStore';
import { CardViewModel } from './CardViewModel';
import { CardView } from './CardView';

interface Props {
  currencyType: string,
  exchangeRate: number
}

export const Card: React.FC<Props> = observer((props) => {
  const { currencyType, exchangeRate } = props;
  const currencyCardStore = DiContainer.get(ICardStore);
  const viewModel = useMemo(() => new CardViewModel(currencyCardStore, currencyType, exchangeRate), [currencyCardStore, currencyType, exchangeRate]);

  if (!viewModel.ready) return null;

    return (
        <CardView 
        currencyType={viewModel.currencyType} 
        exchangeRate={viewModel.exchangeRate}
        />
    )
});