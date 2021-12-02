import { computed, makeObservable } from 'mobx';
import { ICurrencyCard } from './ICurrencyCard';
import { ICurrencyCardStore } from './ICurrencyCardStore';

export class NewsViewModel {
    public constructor(private store: ICurrencyCardStore) {
      makeObservable(this);
    }

    @computed
    public get currencyType(): string {
      return this.store.currencyType;
    }
  
    @computed
    public get exchangeRate(): number{
      return this.store.exchangeRate;
    }
  
    @computed
    public get changeRate(): number {
      return this.store.changeRate;
    }
}