import { injectable, inject } from 'inversify';
import { HistoryApi } from './HistoryApi';
import { DiContainer } from '../../di/DIContainer';
import { HistoryCard } from './HistoryCard';
import moment from 'moment';

@injectable()
export abstract class IHistoryStore {
  public abstract recentHistory(code: string, dateFrom: string, dateTo: string): Promise<HistoryCard[]>;
}

@injectable()
export class HistoryStore implements IHistoryStore {
  public constructor(@inject(HistoryApi) private api: HistoryApi) {
    
  }

  public async recentHistory(code: string, dateFrom: string, dateTo: string): Promise<HistoryCard[]> {
    const historyRates = await this.api.loadHistory('RUB', dateFrom, dateTo);
    
    const histRatesReversed = historyRates.reverse();

    const histCards = histRatesReversed.map((dailyRate, index) => {
     
      const todayCard = histRatesReversed.map(dailyRate => dailyRate.currencies).map(item => item[code])
      const todayRate = (1/todayCard[index].value).toFixed(2)

      const prevRate = index < 5 ? (1/todayCard[index + 1].value).toFixed(2) : "0"

      return new HistoryCard(moment(dailyRate.datetime).subtract(1, 'days').format('DD.MM.YY'), todayRate, prevRate);
    });

    return histCards;
  }
}

DiContainer.register(IHistoryStore, HistoryStore);



