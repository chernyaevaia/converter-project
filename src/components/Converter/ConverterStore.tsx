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
    return [...this.ratesMap.values()]; //получены карточки с обновляемым курсом
  }

  private async getRates() {
    const rates = await this.api.loadCurrentRates('RUB');
    runInAction(() => {
      Object.entries(rates).forEach((rate) => {
        const card = this.ratesMap.get(rate[0]);
        if (card) {
          card.update(rate[1]);
        } else {
          let newCard = new ConverterCard(rate[0], rate[1]);
          this.ratesMap.set(rate[0], newCard);
        }
      });
    });
  }

  public updateRate() {
    setInterval(() => this.getRates(), 300000);
  }
}

DiContainer.register(IConverterStore, ConverterStore);
