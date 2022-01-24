import { computed, makeObservable, action } from 'mobx';
import { ICardStore } from './CardStore';
import { CurrencyCard } from './CurrencyCard';

export class CardViewModel {
  public constructor(private store: ICardStore, public model: CurrencyCard) {
    makeObservable(this);
    makeObservable(CurrencyCard)
  }

  @computed
  public get ready(): boolean {
    return !!this.store.lastRates;
  }

  @computed 
  public get currencyType(): string {
      return this.model.currencyType
  }

  @computed 
  public get exchangeRate(): number {
      return +(1/this.model.exchangeRate).toFixed(2)
  }

  //reaction(() => value, (value, previousValue, reaction) => { sideEffect }, options?)
  //@action


  public get pastRate(): number {
      return this.pastRate
    }
  }
  @computed 
  public get change(): number {
      return +(1/this.model.exchangeRate).toFixed(2) - +(1/this.pastRate).toFixed(2)
  }

}