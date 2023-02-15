import { injectable, inject } from 'inversify';
import { ChartApi } from './ChartApi';
import { ChartCard } from './ChartCard';
import { DiContainer } from '../../di/DIContainer';
import { computed, makeObservable, observable, runInAction } from 'mobx';

@injectable()
export abstract class IChartStore {
  public cardsArray: ChartCard[] = [];
  public abstract getHistoryRates(code: string, dateFrom: string, dateTo: string): Promise<number[]>;
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
    return [...this.ratesMap.values()];
  }

  private async getCurrentRates(): Promise<void> {
    const rates = await this.api.loadCurrentRates('RUB');
    const rates2 = Object.entries(rates).map((rate3) => rate3[1]);

    runInAction(() => {
      rates2.forEach((rate) => {
        const card = this.ratesMap.get(rate.code);
        if (card) {
          card.update(rate.value);
        } else if (rate.code === 'RUB') {
          return;
        } else {
          let newCard = new ChartCard(rate.code, rate.value);
          this.ratesMap.set(rate.code, newCard);
        }
      });
    });
  }

  public updateRate() {
    setInterval(() => this.getCurrentRates(), 60000);
  }

  public async getHistoryRates(code: string, dateFrom: string, dateTo: string): Promise<number[]> {
    const historyRates = await this.api.loadRatesHistory('RUB', dateFrom, dateTo);

    const rates = historyRates
      .map((item) => item.currencies)
      .map((item) => {
        const valueCard = item[code];
        return 1 / valueCard.value;
      });
    return rates;
  }
}

DiContainer.register(IChartStore, ChartStore);
