import { observer } from 'mobx-react';
import { DiContainer } from '../../di';
import { IChartStore } from './ChartStore';
import { ChartViewModel } from './ChartViewModel';
import { useMemo } from 'react';
import { ChartCard } from './ChartCard';
import { ChartView } from './ChartView';
import styles from './chart.module.scss';

interface Props {
  card: ChartCard;
}

export const Chart: React.FC<Props> = observer((props) => {

  const { card } = props;
  const ChartStore = DiContainer.get(IChartStore);
  const viewModel = useMemo(() => new ChartViewModel(ChartStore, card), [ChartStore, card]);

  return (
    <>
    <div className={styles.container}>
      <p className={styles.today}>{viewModel.today}</p>
      <ChartView
        currencyType={viewModel.currencyType}
        exchangeRate={viewModel.exchangeRate}
        change={viewModel.fluctuation}
      />
      </div>
</>
  );
});

