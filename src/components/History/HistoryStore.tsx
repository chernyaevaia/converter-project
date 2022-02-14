import { injectable, inject } from 'inversify';
//import { makeObservable, observable } from 'mobx';
import { HistoryApi } from './HistoryApi';
import { DiContainer } from '../../di/DIContainer';
import {HistoryCard} from './HistoryCard'


@injectable()
export abstract class IHistoryStore {

public abstract recentHistory(code: string, dateFrom: string, dateTo: string): Promise<HistoryCard[]>;

}

@injectable()
export class HistoryStore implements IHistoryStore {

  public constructor(@inject(HistoryApi) private api: HistoryApi) {

  }

  public async recentHistory (code: string, dateFrom: string, dateTo: string): Promise<HistoryCard[]> {

    const historyRates = await this.api.loadHistory('RUB', dateFrom, dateTo)//{"2020-10-01":{"AED":3.6733,"DKK":6.33844,"MNT":2826.03255,"RUB":77.24319} 

    const history = Object.entries(historyRates).reverse(); // 
      
      const histCards = history.map((dailyRates, index) => { // dailyRates это ["2022-01-30", {JMD: 2, MUR: 51.16}] ПЕРВАЯ ДАТА САМАЯ НОВАЯ


        let previousRate: number =  index < 4 ? history[index + 1][1][code]: 0; //у первой карточки prevrate 0

          let todayRate: number = history[index][1][code];

          return new HistoryCard(dailyRates[0], +(1/todayRate).toFixed(2), +(1/previousRate).toFixed(2))
        })
        
      return histCards


  }
  
  }

 
DiContainer.register(IHistoryStore, HistoryStore);

