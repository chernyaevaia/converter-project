import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { DiContainer } from '../../di';
import { IChartStore } from './ChartStore';
import { Chart } from './Chart';
import { ChartComponentViewModel } from './ChartComponentVM';
import { useParams } from 'react-router-dom';
import { LineChart } from './LineChart';

export const ChartComponent = observer(() => {
  const { currencyCode } = useParams();

  const chartStore = DiContainer.get(IChartStore);
  const viewModel = useMemo(() => new ChartComponentViewModel(chartStore, currencyCode), [chartStore, currencyCode]);

  if (!viewModel.ready) return null;
  if (!viewModel.code) return null;

  return (
    <>
      {viewModel.cards.map((card) => (
        <Chart key={card.currencyType} card={card} />
      ))}
      <LineChart />
    </>
  );
});
