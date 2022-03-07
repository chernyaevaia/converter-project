import { injectable, inject } from 'inversify';
import { HistoryApi } from './HistoryApi';
import { DiContainer } from '../../di/DIContainer';
import {HistoryCard} from './HistoryCard'
import moment from 'moment';


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


        let previousRate: number =  index < 5 ? +(1/history[index + 1][1][code]).toFixed(2) : 0; //у первой карточки prevrate 0


          let todayRate: number = +(1/history[index][1][code]).toFixed(2);

          console.log((1/history[index][1][code]).toFixed(2).length)

          return new HistoryCard(moment(dailyRates[0]).format('DD.MM.YY'), todayRate, previousRate)
        })

      return histCards


  }
  
  }


DiContainer.register(IHistoryStore, HistoryStore);

