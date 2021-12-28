import { computed, makeObservable } from 'mobx';
import { ICurrencyCardStore } from './CurrencyCardStore';

export class CurrencyCardListViewModel {
  public constructor(private store: ICurrencyCardStore) {
    makeObservable(this);
  }

  @computed
  get rates() {
    if (!this.store.lastRates) throw new Error('Unable to get the rates');
    return this.store.lastRates;
  }

  @computed
  public get currencyType(): string {
    return this.rates.currencyType;
  }

  @computed
  public get exchangeRate(): number {
    return this.rates.exchangeRate;
  }
}