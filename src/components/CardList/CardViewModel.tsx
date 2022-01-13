import { computed, makeObservable } from 'mobx';
import { ICardStore } from './CardStore';
import { ICard } from './ICard'

export class CardViewModel {
  public constructor(private store: ICardStore) {
    makeObservable(this);
  }

  @computed
  public get ready(): boolean {
    return !!this.store.lastRates;
  }

  @computed
  private get rates(): ICard[] {
    if (!this.store.lastRates) throw new Error('rates not found');
    return this.store.lastRates;
  }

  @computed 
  public get currencyType(): string {
      return this.rates[0].currencyType
  }


  @computed 
  public get exchangeRate(): number {
      return +(1/this.rates[0].exchangeRate).toFixed(2)
  }
}