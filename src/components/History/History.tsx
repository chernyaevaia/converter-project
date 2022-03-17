import { observer } from 'mobx-react';
import { useEffect, useMemo } from 'react';
import { DiContainer } from '../../di';
import { IHistoryStore } from './HistoryStore';
import { HistoryViewModel } from './HistoryViewModel';
import { HistoryView } from './HistoryView';
import { useParams } from 'react-router-dom';
import styles from './history.module.scss';

export const History: React.FC = observer(() => {
  const { currencyCode } = useParams();

  const historyStore = DiContainer.get(IHistoryStore);

  const viewModel = useMemo(() => new HistoryViewModel(historyStore, currencyCode), [historyStore, currencyCode]);

  useEffect(() => {
    viewModel.init();
  }, [viewModel]);

  if (!viewModel.ready) return null;
  if (!viewModel.code) return null;

  return (
    <>
      <div className={styles.container}>
      <h3 className={styles.header}>За последние 5 дней</h3>
      <div className={styles.textContainer}>
        <p className={styles.text}>Дата</p>
        <p className={styles.text}>Курс</p>
        <p className={styles.text}>Изменение</p>
        </div>

        {viewModel.historyCards.map((card) => (
          viewModel.historyCards.indexOf(card) % 2 === 0 ?
          <div className={styles.whiteblock}>
            <HistoryView key={card.date} rate={card.rate} date={card.date} change={card.difference} />
          </div>:
          <HistoryView key={card.date} rate={card.rate} date={card.date} change={card.difference} /> 
        ))}
      </div>
    </>
  );
});
