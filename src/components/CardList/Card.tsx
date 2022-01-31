import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { DiContainer } from '../../di';
import { ICardStore } from './CardStore';
import { CardViewModel } from './CardViewModel';
import { CardView } from './CardView';
import { CurrencyCard } from './CurrencyCard';

interface Props {
  card: CurrencyCard
}

export const Card: React.FC<Props> = observer((props) => {
  const { card } = props;
  const currencyCardStore = DiContainer.get(ICardStore);
  const viewModel = useMemo(() => new CardViewModel(currencyCardStore, card), [currencyCardStore, card]);

  if (!viewModel.ready) return null;

    return (
        <CardView 
        currencyType={viewModel.currencyType} 
        exchangeRate={viewModel.exchangeRate}
        change={viewModel.fluctuation}
        />
    )
});