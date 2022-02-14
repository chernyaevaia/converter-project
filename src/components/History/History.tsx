import { observer } from 'mobx-react';
import { useMemo } from 'react';
import { DiContainer } from '../../di';
import { IHistoryStore } from './HistoryStore';
import { HistoryViewModel } from './HistoryViewModel';
import { HistoryView } from './HistoryView';
import { useParams } from 'react-router-dom';
import styles from './history.module.scss'


export const History: React.FC = observer(() => {

  const {currencyCode} = useParams();

  if (!currencyCode) {
    return null
  }
  
  const historyStore = DiContainer.get(IHistoryStore);


  
  const viewModel = useMemo(() => new HistoryViewModel(historyStore, currencyCode), [historyStore, currencyCode]);

  if (!viewModel.ready) return null;

  viewModel.init()

    return (
      <>
        <div className={styles.container}>
          <h3 className={styles.header}>За последние 5 дней</h3>
          <p className={styles.text}>Дата</p>
          <p className={styles.text}>Курс</p>
          <p className={styles.text}>Изменение</p>
  
          {viewModel.historyCards
          .map((card) => ( 
            <HistoryView 
            rate={card.rate}
            date={card.date}
            change={card.difference} />
          ))}
  
        </div>
      </>
    );
  });
