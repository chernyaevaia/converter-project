import { injectable, inject } from 'inversify';
import { ChartApi } from './ChartApi';
import { ChartCard } from './ChartCard';
import { DiContainer } from '../../di/DIContainer';
import { computed, makeObservable, observable, runInAction } from 'mobx';

@injectable()
export abstract class IChartStore {
  public cardsArray: ChartCard[] = []
  public abstract getHistoryRates(code: string, dateFrom: string, dateTo: string): Promise<number[]>
}

@injectable()
export class ChartStore implements IChartStore {

  @observable
  private ratesMap: Map<string, ChartCard> = new Map<string, ChartCard>();
  
  public constructor(@inject(ChartApi) private api: ChartApi) {
    makeObservable(this);
    this.getCurrentRates();
    this.updateRate();
  }

  @computed
  public get cardsArray(): ChartCard[] {
    return  [...this.ratesMap.values()]
  }

  private async getCurrentRates() { //ДЛЯ ЗАГОЛОВКА ГРАФИКА
    const rates = await this.api.loadCurrentRates('RUB'); 
    runInAction(() => {
      Object.entries(rates) 
      .forEach((rate) => { 
        const card = this.ratesMap.get(rate[0]); 
      if (card) {                               
        card.update(rate[1]);               
      } else if (rate[0] === 'RUB'){
        return
      } else{
            let newCard = new ChartCard(rate[0], rate[1]);
          this.ratesMap.set(rate[0], newCard);
        }
      });    
    });
  } 

  public updateRate() {
    setInterval(() => this.getCurrentRates(), 300000);
  }

  public async getHistoryRates (code: string, dateFrom: string, dateTo: string): Promise<number[]> { //массив курсов для графика

    const historyRates = await this.api.loadRatesHistory('RUB', dateFrom, dateTo)
    const history = Object.entries(historyRates).map((dailyRates => +(1/dailyRates[1][code]).toFixed(3)))
    
    return history
  }
}


DiContainer.register(IChartStore, ChartStore);
