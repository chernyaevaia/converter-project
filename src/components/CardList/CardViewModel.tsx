import { computed, makeObservable } from 'mobx';
import { ICardStore } from './CardStore';

export class CardViewModel {
  public constructor(private store: ICardStore, public currencyCode: string, public currencyRate: number) {
    makeObservable(this);
    this.currencyCode = currencyCode;
    this.currencyRate = currencyRate;
  }

  @computed
  public get ready(): boolean {
    return !!this.store.lastRates;
  }

  @computed 
  public get currencyType(): string {
      return this.currencyCode
  }

  @computed 
  public get exchangeRate(): number {
      return +(1/this.currencyRate).toFixed(2)
  }

}