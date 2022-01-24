import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { DiContainer } from '../../di';
import { ICardStore } from './CardStore';
import { CardViewModel } from './CardViewModel';
import { CardView } from './CardView';
import { CurrencyCard } from './CurrencyCard';

interface Props {
  currencyType: string,
  exchangeRate: number, 
  change: number,
}

export const Card: React.FC<Props> = observer((props) => {
  //const { currencyType, exchangeRate } = props;
  const currencyCardStore = DiContainer.get(ICardStore);
  const viewModel = useMemo(() => new CardViewModel(currencyCardStore, CurrencyCard), [currencyCardStore]);

  if (!viewModel.ready) return null;

    return (
        <CardView 
        currencyType={viewModel.currencyType} 
        exchangeRate={viewModel.exchangeRate}
        change={viewModel.change}
        />
    )
});