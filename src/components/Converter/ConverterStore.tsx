import { injectable, inject } from 'inversify';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { DiContainer } from '../../di/DIContainer';
import { ConverterApi } from './ConverterApi';
import { ConverterCard } from './ConverterCard';

@injectable()
export abstract class IConverterStore {
    public cardsArray: ConverterCard[] = []
}

@injectable()
export class ConverterStore implements IConverterStore {

  @observable
  private ratesMap: Map<string, ConverterCard> = new Map<string, ConverterCard>();

  public constructor(@inject(ConverterApi) private api: ConverterApi) {
    makeObservable(this);
    this.getRates();
    this.updateRate();
  }

  
  @computed
  public get cardsArray(): ConverterCard[] {
    return [...this.ratesMap.values()];
  }

  private async getRates(): Promise<void> {
    const rates = await this.api.loadCurrentRates('RUB');
    const rates2 = Object.entries(rates).map((item) => item[1]);

    runInAction(() => {
      rates2.forEach((rate) => {
        const card = this.ratesMap.get(rate.code);

        if (card) {
          card.update(rate.value);
        } else {
          let newCard = new ConverterCard(rate.code, rate.value);
          this.ratesMap.set(rate.code, newCard);
        }
      });
    });
  }

  public updateRate() {
    setInterval(() => this.getRates(), 300000);
  }
}

DiContainer.register(IConverterStore, ConverterStore);
