import { makeObservable, observable } from 'mobx';
import { ICard } from './ICard';

export class CurrencyCard implements ICard {
  public currencyType: string;

  @observable
  public exchangeRate: number;

  public constructor(currencyType: string, exchangeRate: number) {
    makeObservable(this);
    this.exchangeRate = exchangeRate;
    this.currencyType = currencyType;
  }

  @observable
  public update(exchangeRate: number) {
    this.exchangeRate = exchangeRate;
  }
}
