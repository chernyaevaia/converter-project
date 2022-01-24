import { injectable, inject } from 'inversify';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { CardApi } from './CardApi';
import { ICard } from './ICard';
import { DiContainer } from '../../di/DIContainer';
import { CurrencyCard } from './CurrencyCard';

@injectable()
export abstract class ICardStore {
  public lastRates: ICard[] = [];
}

@injectable()
export class CardStore implements ICardStore {
  public lastRates: ICard[] = [];

  @observable
  private ratesMap: Map<string, CurrencyCard> = new Map<string, CurrencyCard>();
  public constructor(@inject(CardApi) private api: CardApi) {
    makeObservable(this);
    this.getRates();
    this.updateRate();
  }

  @computed
  public get recentRates(): CurrencyCard[] {
    return Array.from(this.ratesMap).map(rate => rate[1])

}

//[[x, Y], [x, Y], [x, Y], [x, Y], [x, Y], [x, Y]]
    //let cardArray = Array.from(this.ratesMap)
    //return this.ratesMap.get()

  // const rates = this.api.loadRates();
  // return Object.entries(rates).map(rate => this.ratesMap.get(rate[0])!)

    // const entries = this.ratesMap.entries();
  // for (const entry of entries) {
  // console.log(entry[1]);

   //let cardsArray: CurrencyCard[] = Array.prototype.slice.call(this.ratesMap, 0);
   //cardsArray.map(card => card)
    // let i;
    // for (i = 0; i < cardsArray.length; i++) {
    //   return cardsArray[i];

    // for (let card of this.ratesMap) {
    //   return card[1]

    //return this.ratesMap.entries().next().value

    // Array.from(map, ([key, value]) => `${key}:${value}`)


  private async getRates() {
    const rates = await this.api.loadRates();
    runInAction(() => {
      Object.entries(rates).forEach((rate) => {
        if (this.ratesMap.has(rate[0])) {
          this.ratesMap.get(rate[0])?.update(rate[1]);
        } else {
          let newCard = new CurrencyCard(rate[0], rate[1]);
          this.ratesMap.set(rate[0], newCard);
        }
      });    
    });
  }

  public updateRate() {
    setInterval(() => this.getRates(), 60000);
  }
}

DiContainer.register(ICardStore, CardStore);
