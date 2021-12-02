import { computed, makeObservable } from 'mobx';
import { ICurrencyCard } from './ICurrencyCard';
import { ICurrencyCardStore } from './CurrencyCardStore';

export class CurrencyCardViewModel {
    public constructor(private store: ICurrencyCardStore) {
      makeObservable(this);
    }

    @computed
    private get rates(): ICurrencyCard {
      if (!this.store.lastRates) throw new Error('Rates must be defined');
      return this.store.lastRates;
    }

    @computed
    public get currencyType(): string {
      return this.rates.currencyType;
    }
  
    @computed
    public get exchangeRate(): number{
      return this.rates.exchangeRate;
    }
}