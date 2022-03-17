import { injectable, inject } from 'inversify';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { CardApi } from './CardApi';
import { DiContainer } from '../../di/DIContainer';
import { CurrencyCard } from './CurrencyCard';

@injectable()
export abstract class ICardStore {
  public cardsArray: CurrencyCard[] = [];
}

@injectable()
export class CardStore implements ICardStore {
  @observable
  private ratesMap: Map<string, CurrencyCard> = new Map<string, CurrencyCard>();

  public constructor(@inject(CardApi) private api: CardApi) {
    makeObservable(this);
    this.getRates();
    this.updateRate();
  }

  @computed
  public get cardsArray(): CurrencyCard[] {
    return [...this.ratesMap.values()];
  }

  private async getRates() {
    const rates = await this.api.loadRates();
    const rates2 = Object.entries(rates).map((item) => item[1]);

    runInAction(() => {
      rates2.forEach((rate) => {
        const card = this.ratesMap.get(rate.code);

        if (card) {
          card.update(rate.value);
        } else if (rate.code === 'RUB') {
          return;
        } else {
          let newCard = new CurrencyCard(rate.code, rate.value);
          this.ratesMap.set(rate.code, newCard);
        }
      });
    });
  }

  public updateRate() {
    setInterval(() => this.getRates(), 60000);
  }
}

DiContainer.register(ICardStore, CardStore);
