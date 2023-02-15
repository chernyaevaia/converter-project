import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { observer } from 'mobx-react';
import { Line } from 'react-chartjs-2';
import styles from './chart.module.scss';

import { IChartStore } from './ChartStore';
import { ChartType, LineChartViewModel } from './LineChartViewModel';
import { useParams } from 'react-router-dom';
import { DiContainer } from 'src/di/DIContainer';
import { useEffect, useMemo } from 'react';

export const LineChart: React.FC = observer(() => {
  const { currencyCode } = useParams();
  const chartStore = DiContainer.get(IChartStore);
  const viewModel = useMemo(() => new LineChartViewModel(chartStore, currencyCode), [chartStore, currencyCode]);

  useEffect(() => {
    viewModel.init();
  }, [viewModel]);

  if (!viewModel.code) return null;

  const options = {
    responsive: true,
  };

  const labels = viewModel.labels;

  const data = {
    labels,
    datasets: [
      {
        label: 'динамика курса',
        data: viewModel.ratesArray,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <>
      <div className={styles.btnContainer}>
        <button onClick={viewModel.getTypeOnClick(ChartType.WEEK)} className={styles.choosePeriodBtn}>
          неделя
        </button>
        <button onClick={viewModel.getTypeOnClick(ChartType.MONTH)} className={styles.choosePeriodBtn}>
          месяц
        </button>
        <button onClick={viewModel.getTypeOnClick(ChartType.QUARTER)} className={styles.choosePeriodBtn}>
          квартал
        </button>
        <button onClick={viewModel.getTypeOnClick(ChartType.YEAR)} className={styles.choosePeriodBtn}>
          год
        </button>
      </div>
      <div className={styles.chart}>
        <Line options={options} data={data} />
      </div>
    </>
  );
});

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
