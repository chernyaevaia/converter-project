import { injectable, inject } from 'inversify';
import { makeObservable, observable, runInAction } from 'mobx';
import { CardApi } from './CardApi';
import { ICard } from './ICard';
import { DiContainer } from '../../di/DIContainer';


@injectable()
export abstract class ICardStore {
public lastRates: ICard[] = [];
}

@injectable()
export class CardStore implements ICardStore {
  @observable
  public lastRates: ICard[] = [];


  public constructor(@inject(CardApi) private api: CardApi) {
    makeObservable(this);
    this.getRates();
  }

  private async getRates() {
    const rates = await this.api.loadRates();
    runInAction(() => {
      this.lastRates = Object.entries(rates).map(rate => this.createCurrencyCard(rate[0], rate[1]));
    })
  }

  private createCurrencyCard(currencyType: string, exchangeRate: number): ICard {
    return { currencyType, exchangeRate }
  }

}

DiContainer.register(ICardStore, CardStore);